-- Create airports table
CREATE TABLE public.airports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  iata_code VARCHAR(3) UNIQUE NOT NULL,
  icao_code VARCHAR(4),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  timezone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for fast searching
CREATE INDEX idx_airports_iata ON public.airports(iata_code);
CREATE INDEX idx_airports_city ON public.airports USING gin(to_tsvector('english', city));
CREATE INDEX idx_airports_country ON public.airports USING gin(to_tsvector('english', country));
CREATE INDEX idx_airports_name ON public.airports USING gin(to_tsvector('english', name));

-- Enable RLS (but make it public for reading)
ALTER TABLE public.airports ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read airports (no auth required)
CREATE POLICY "Allow public read access to airports"
  ON public.airports
  FOR SELECT
  USING (true);

-- Create booking leads table
CREATE TABLE public.booking_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Trip Details
  trip_type VARCHAR(20) NOT NULL CHECK (trip_type IN ('one-way', 'round-trip', 'multi-city')),
  from_location TEXT NOT NULL,
  from_airport_id UUID REFERENCES public.airports(id),
  to_location TEXT NOT NULL,
  to_airport_id UUID REFERENCES public.airports(id),
  departure_date DATE NOT NULL,
  return_date DATE,
  
  -- Passenger Details
  adults INTEGER NOT NULL DEFAULT 1 CHECK (adults >= 1 AND adults <= 9),
  children INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0 AND children <= 9),
  infants INTEGER NOT NULL DEFAULT 0 CHECK (infants >= 0 AND infants <= 9),
  
  -- Contact Info (optional - can be collected later)
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  
  -- WhatsApp Message
  whatsapp_message TEXT NOT NULL,
  whatsapp_sent BOOLEAN DEFAULT false,
  whatsapp_sent_at TIMESTAMPTZ,
  
  -- Tracking
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'cancelled')),
  ip_address INET,
  user_agent TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_booking_leads_created_at ON public.booking_leads(created_at DESC);
CREATE INDEX idx_booking_leads_status ON public.booking_leads(status);
CREATE INDEX idx_booking_leads_to_airport ON public.booking_leads(to_airport_id);
CREATE INDEX idx_booking_leads_departure_date ON public.booking_leads(departure_date);

-- Enable RLS
ALTER TABLE public.booking_leads ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a lead (no auth required for booking form)
CREATE POLICY "Anyone can create a booking lead"
  ON public.booking_leads
  FOR INSERT
  WITH CHECK (true);

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_booking_leads_updated_at
  BEFORE UPDATE ON public.booking_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample airports (major hubs to get started)
INSERT INTO public.airports (iata_code, icao_code, name, city, country, latitude, longitude) VALUES
  -- South Africa
  ('JNB', 'FAOR', 'O.R. Tambo International Airport', 'Johannesburg', 'South Africa', -26.1392, 28.246),
  ('CPT', 'FACT', 'Cape Town International Airport', 'Cape Town', 'South Africa', -33.9648, 18.6017),
  ('DUR', 'FADN', 'King Shaka International Airport', 'Durban', 'South Africa', -29.9703, 30.9506),
  
  -- Pakistan
  ('KHI', 'OPKC', 'Jinnah International Airport', 'Karachi', 'Pakistan', 24.9056, 67.1608),
  ('LHE', 'OPLA', 'Allama Iqbal International Airport', 'Lahore', 'Pakistan', 31.5217, 74.4036),
  ('ISB', 'OPIS', 'Islamabad International Airport', 'Islamabad', 'Pakistan', 33.5651, 72.8514),
  ('PEW', 'OPPS', 'Peshawar International Airport', 'Peshawar', 'Pakistan', 33.9939, 71.5146),
  ('SKT', 'OPST', 'Sialkot International Airport', 'Sialkot', 'Pakistan', 32.5356, 74.3639),
  ('MUX', 'OPMT', 'Multan International Airport', 'Multan', 'Pakistan', 30.2032, 71.4191),
  
  -- UAE
  ('DXB', 'OMDB', 'Dubai International Airport', 'Dubai', 'United Arab Emirates', 25.2528, 55.3644),
  ('AUH', 'OMAA', 'Abu Dhabi International Airport', 'Abu Dhabi', 'United Arab Emirates', 24.4330, 54.6511),
  ('SHJ', 'OMSJ', 'Sharjah International Airport', 'Sharjah', 'United Arab Emirates', 25.3286, 55.5172),
  
  -- Saudi Arabia
  ('JED', 'OEJN', 'King Abdulaziz International Airport', 'Jeddah', 'Saudi Arabia', 21.6796, 39.1565),
  ('RUH', 'OERK', 'King Khalid International Airport', 'Riyadh', 'Saudi Arabia', 24.9576, 46.6987),
  ('DMM', 'OEDF', 'King Fahd International Airport', 'Dammam', 'Saudi Arabia', 26.4711, 49.7979),
  ('MED', 'OEMA', 'Prince Mohammad bin Abdulaziz Airport', 'Medina', 'Saudi Arabia', 24.5534, 39.7051),
  
  -- USA
  ('JFK', 'KJFK', 'John F. Kennedy International Airport', 'New York', 'United States', 40.6413, -73.7781),
  ('LAX', 'KLAX', 'Los Angeles International Airport', 'Los Angeles', 'United States', 33.9416, -118.4085),
  ('ORD', 'KORD', 'O''Hare International Airport', 'Chicago', 'United States', 41.9742, -87.9073),
  ('MIA', 'KMIA', 'Miami International Airport', 'Miami', 'United States', 25.7959, -80.2870),
  ('IAH', 'KIAH', 'George Bush Intercontinental Airport', 'Houston', 'United States', 29.9902, -95.3368),
  ('IAD', 'KIAD', 'Washington Dulles International Airport', 'Washington', 'United States', 38.9531, -77.4565),
  
  -- UK
  ('LHR', 'EGLL', 'London Heathrow Airport', 'London', 'United Kingdom', 51.4700, -0.4543),
  ('LGW', 'EGKK', 'London Gatwick Airport', 'London', 'United Kingdom', 51.1537, -0.1821),
  ('MAN', 'EGCC', 'Manchester Airport', 'Manchester', 'United Kingdom', 53.3587, -2.2729),
  
  -- Other Major Hubs
  ('CDG', 'LFPG', 'Charles de Gaulle Airport', 'Paris', 'France', 49.0097, 2.5479),
  ('FRA', 'EDDF', 'Frankfurt Airport', 'Frankfurt', 'Germany', 50.0379, 8.5622),
  ('AMS', 'EHAM', 'Amsterdam Airport Schiphol', 'Amsterdam', 'Netherlands', 52.3105, 4.7683),
  ('IST', 'LTFM', 'Istanbul Airport', 'Istanbul', 'Turkey', 41.2753, 28.7519),
  ('DOH', 'OTHH', 'Hamad International Airport', 'Doha', 'Qatar', 25.2731, 51.6080),
  ('SIN', 'WSSS', 'Singapore Changi Airport', 'Singapore', 'Singapore', 1.3644, 103.9915),
  ('BKK', 'VTBS', 'Suvarnabhumi Airport', 'Bangkok', 'Thailand', 13.6900, 100.7501),
  ('HKG', 'VHHH', 'Hong Kong International Airport', 'Hong Kong', 'Hong Kong', 22.3080, 113.9185),
  ('SYD', 'YSSY', 'Sydney Kingsford Smith Airport', 'Sydney', 'Australia', -33.9399, 151.1753);