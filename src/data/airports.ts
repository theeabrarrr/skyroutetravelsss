export interface Airport {
  code: string;
  city: string;
  airport: string;
  country: string;
}

export const AIRPORTS: Airport[] = [
  // South Africa
  { code: "JNB", city: "Johannesburg", airport: "O.R. Tambo International", country: "South Africa" },
  { code: "CPT", city: "Cape Town", airport: "Cape Town International", country: "South Africa" },
  { code: "DUR", city: "Durban", airport: "King Shaka International", country: "South Africa" },
  { code: "PLZ", city: "Port Elizabeth", airport: "Chief Dawid Stuurman International", country: "South Africa" },
  { code: "BFN", city: "Bloemfontein", airport: "Bram Fischer International", country: "South Africa" },
  
  // Pakistan
  { code: "KHI", city: "Karachi", airport: "Jinnah International", country: "Pakistan" },
  { code: "LHE", city: "Lahore", airport: "Allama Iqbal International", country: "Pakistan" },
  { code: "ISB", city: "Islamabad", airport: "Islamabad International", country: "Pakistan" },
  { code: "PEW", city: "Peshawar", airport: "Bacha Khan International", country: "Pakistan" },
  { code: "SKT", city: "Sialkot", airport: "Sialkot International", country: "Pakistan" },
  { code: "MUX", city: "Multan", airport: "Multan International", country: "Pakistan" },
  { code: "RYK", city: "Rahim Yar Khan", airport: "Shaikh Zayed International", country: "Pakistan" },
  { code: "UET", city: "Quetta", airport: "Quetta International", country: "Pakistan" },
  { code: "FSD", city: "Faisalabad", airport: "Faisalabad International", country: "Pakistan" },
  
  // United States
  { code: "JFK", city: "New York", airport: "John F. Kennedy International", country: "United States" },
  { code: "LAX", city: "Los Angeles", airport: "Los Angeles International", country: "United States" },
  { code: "ORD", city: "Chicago", airport: "O'Hare International", country: "United States" },
  { code: "MIA", city: "Miami", airport: "Miami International", country: "United States" },
  { code: "SFO", city: "San Francisco", airport: "San Francisco International", country: "United States" },
  { code: "EWR", city: "Newark", airport: "Newark Liberty International", country: "United States" },
  { code: "IAD", city: "Washington", airport: "Washington Dulles International", country: "United States" },
  { code: "BOS", city: "Boston", airport: "Logan International", country: "United States" },
  { code: "ATL", city: "Atlanta", airport: "Hartsfield-Jackson Atlanta International", country: "United States" },
  { code: "DFW", city: "Dallas", airport: "Dallas/Fort Worth International", country: "United States" },
  { code: "IAH", city: "Houston", airport: "George Bush Intercontinental", country: "United States" },
  { code: "SEA", city: "Seattle", airport: "Seattle-Tacoma International", country: "United States" },
  { code: "LAS", city: "Las Vegas", airport: "Harry Reid International", country: "United States" },
  { code: "MCO", city: "Orlando", airport: "Orlando International", country: "United States" },
  { code: "DEN", city: "Denver", airport: "Denver International", country: "United States" },
  { code: "PHX", city: "Phoenix", airport: "Sky Harbor International", country: "United States" },
  
  // United Kingdom
  { code: "LHR", city: "London", airport: "Heathrow", country: "United Kingdom" },
  { code: "LGW", city: "London", airport: "Gatwick", country: "United Kingdom" },
  { code: "MAN", city: "Manchester", airport: "Manchester", country: "United Kingdom" },
  { code: "EDI", city: "Edinburgh", airport: "Edinburgh", country: "United Kingdom" },
  { code: "BHX", city: "Birmingham", airport: "Birmingham", country: "United Kingdom" },
  { code: "GLA", city: "Glasgow", airport: "Glasgow", country: "United Kingdom" },
  
  // United Arab Emirates
  { code: "DXB", city: "Dubai", airport: "Dubai International", country: "United Arab Emirates" },
  { code: "AUH", city: "Abu Dhabi", airport: "Abu Dhabi International", country: "United Arab Emirates" },
  { code: "SHJ", city: "Sharjah", airport: "Sharjah International", country: "United Arab Emirates" },
  
  // Saudi Arabia
  { code: "JED", city: "Jeddah", airport: "King Abdulaziz International", country: "Saudi Arabia" },
  { code: "RUH", city: "Riyadh", airport: "King Khalid International", country: "Saudi Arabia" },
  { code: "DMM", city: "Dammam", airport: "King Fahd International", country: "Saudi Arabia" },
  { code: "MED", city: "Medina", airport: "Prince Mohammad Bin Abdulaziz", country: "Saudi Arabia" },
  
  // India
  { code: "DEL", city: "New Delhi", airport: "Indira Gandhi International", country: "India" },
  { code: "BOM", city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International", country: "India" },
  { code: "BLR", city: "Bangalore", airport: "Kempegowda International", country: "India" },
  { code: "MAA", city: "Chennai", airport: "Chennai International", country: "India" },
  { code: "HYD", city: "Hyderabad", airport: "Rajiv Gandhi International", country: "India" },
  { code: "CCU", city: "Kolkata", airport: "Netaji Subhas Chandra Bose International", country: "India" },
  { code: "AMD", city: "Ahmedabad", airport: "Sardar Vallabhbhai Patel International", country: "India" },
  
  // Turkey
  { code: "IST", city: "Istanbul", airport: "Istanbul", country: "Turkey" },
  { code: "SAW", city: "Istanbul", airport: "Sabiha Gökçen International", country: "Turkey" },
  { code: "AYT", city: "Antalya", airport: "Antalya", country: "Turkey" },
  { code: "ESB", city: "Ankara", airport: "Esenboğa", country: "Turkey" },
  
  // Egypt
  { code: "CAI", city: "Cairo", airport: "Cairo International", country: "Egypt" },
  { code: "HRG", city: "Hurghada", airport: "Hurghada International", country: "Egypt" },
  { code: "SSH", city: "Sharm El Sheikh", airport: "Sharm El Sheikh International", country: "Egypt" },
  
  // France
  { code: "CDG", city: "Paris", airport: "Charles de Gaulle", country: "France" },
  { code: "ORY", city: "Paris", airport: "Orly", country: "France" },
  { code: "NCE", city: "Nice", airport: "Nice Côte d'Azur", country: "France" },
  { code: "LYS", city: "Lyon", airport: "Lyon-Saint Exupéry", country: "France" },
  
  // Germany
  { code: "FRA", city: "Frankfurt", airport: "Frankfurt", country: "Germany" },
  { code: "MUC", city: "Munich", airport: "Munich", country: "Germany" },
  { code: "BER", city: "Berlin", airport: "Berlin Brandenburg", country: "Germany" },
  { code: "DUS", city: "Düsseldorf", airport: "Düsseldorf", country: "Germany" },
  
  // Italy
  { code: "FCO", city: "Rome", airport: "Leonardo da Vinci–Fiumicino", country: "Italy" },
  { code: "MXP", city: "Milan", airport: "Malpensa", country: "Italy" },
  { code: "VCE", city: "Venice", airport: "Marco Polo", country: "Italy" },
  { code: "NAP", city: "Naples", airport: "Naples International", country: "Italy" },
  
  // Spain
  { code: "MAD", city: "Madrid", airport: "Adolfo Suárez Madrid–Barajas", country: "Spain" },
  { code: "BCN", city: "Barcelona", airport: "Barcelona–El Prat", country: "Spain" },
  { code: "AGP", city: "Málaga", airport: "Málaga-Costa del Sol", country: "Spain" },
  { code: "PMI", city: "Palma de Mallorca", airport: "Palma de Mallorca", country: "Spain" },
  
  // Netherlands
  { code: "AMS", city: "Amsterdam", airport: "Schiphol", country: "Netherlands" },
  
  // Belgium
  { code: "BRU", city: "Brussels", airport: "Brussels", country: "Belgium" },
  
  // Switzerland
  { code: "ZRH", city: "Zurich", airport: "Zurich", country: "Switzerland" },
  { code: "GVA", city: "Geneva", airport: "Geneva", country: "Switzerland" },
  
  // Austria
  { code: "VIE", city: "Vienna", airport: "Vienna International", country: "Austria" },
  
  // Greece
  { code: "ATH", city: "Athens", airport: "Athens International", country: "Greece" },
  
  // Portugal
  { code: "LIS", city: "Lisbon", airport: "Lisbon Portela", country: "Portugal" },
  { code: "OPO", city: "Porto", airport: "Francisco Sá Carneiro", country: "Portugal" },
  
  // Qatar
  { code: "DOH", city: "Doha", airport: "Hamad International", country: "Qatar" },
  
  // Kuwait
  { code: "KWI", city: "Kuwait City", airport: "Kuwait International", country: "Kuwait" },
  
  // Oman
  { code: "MCT", city: "Muscat", airport: "Muscat International", country: "Oman" },
  
  // Bahrain
  { code: "BAH", city: "Manama", airport: "Bahrain International", country: "Bahrain" },
  
  // Jordan
  { code: "AMM", city: "Amman", airport: "Queen Alia International", country: "Jordan" },
  
  // Lebanon
  { code: "BEY", city: "Beirut", airport: "Rafic Hariri International", country: "Lebanon" },
  
  // China
  { code: "PEK", city: "Beijing", airport: "Beijing Capital International", country: "China" },
  { code: "PVG", city: "Shanghai", airport: "Shanghai Pudong International", country: "China" },
  { code: "CAN", city: "Guangzhou", airport: "Guangzhou Baiyun International", country: "China" },
  { code: "HKG", city: "Hong Kong", airport: "Hong Kong International", country: "China" },
  { code: "SZX", city: "Shenzhen", airport: "Shenzhen Bao'an International", country: "China" },
  
  // Japan
  { code: "NRT", city: "Tokyo", airport: "Narita International", country: "Japan" },
  { code: "HND", city: "Tokyo", airport: "Haneda", country: "Japan" },
  { code: "KIX", city: "Osaka", airport: "Kansai International", country: "Japan" },
  
  // Thailand
  { code: "BKK", city: "Bangkok", airport: "Suvarnabhumi", country: "Thailand" },
  { code: "HKT", city: "Phuket", airport: "Phuket International", country: "Thailand" },
  { code: "CNX", city: "Chiang Mai", airport: "Chiang Mai International", country: "Thailand" },
  
  // Singapore
  { code: "SIN", city: "Singapore", airport: "Changi", country: "Singapore" },
  
  // Malaysia
  { code: "KUL", city: "Kuala Lumpur", airport: "Kuala Lumpur International", country: "Malaysia" },
  { code: "PEN", city: "Penang", airport: "Penang International", country: "Malaysia" },
  
  // Indonesia
  { code: "CGK", city: "Jakarta", airport: "Soekarno-Hatta International", country: "Indonesia" },
  { code: "DPS", city: "Bali", airport: "Ngurah Rai International", country: "Indonesia" },
  
  // South Korea
  { code: "ICN", city: "Seoul", airport: "Incheon International", country: "South Korea" },
  { code: "GMP", city: "Seoul", airport: "Gimpo International", country: "South Korea" },
  
  // Vietnam
  { code: "SGN", city: "Ho Chi Minh City", airport: "Tan Son Nhat International", country: "Vietnam" },
  { code: "HAN", city: "Hanoi", airport: "Noi Bai International", country: "Vietnam" },
  
  // Philippines
  { code: "MNL", city: "Manila", airport: "Ninoy Aquino International", country: "Philippines" },
  
  // Sri Lanka
  { code: "CMB", city: "Colombo", airport: "Bandaranaike International", country: "Sri Lanka" },
  
  // Bangladesh
  { code: "DAC", city: "Dhaka", airport: "Hazrat Shahjalal International", country: "Bangladesh" },
  
  // Canada
  { code: "YYZ", city: "Toronto", airport: "Toronto Pearson International", country: "Canada" },
  { code: "YVR", city: "Vancouver", airport: "Vancouver International", country: "Canada" },
  { code: "YUL", city: "Montreal", airport: "Montréal-Pierre Elliott Trudeau International", country: "Canada" },
  { code: "YYC", city: "Calgary", airport: "Calgary International", country: "Canada" },
  
  // Mexico
  { code: "MEX", city: "Mexico City", airport: "Mexico City International", country: "Mexico" },
  { code: "CUN", city: "Cancún", airport: "Cancún International", country: "Mexico" },
  
  // Brazil
  { code: "GRU", city: "São Paulo", airport: "São Paulo/Guarulhos International", country: "Brazil" },
  { code: "GIG", city: "Rio de Janeiro", airport: "Rio de Janeiro/Galeão International", country: "Brazil" },
  
  // Argentina
  { code: "EZE", city: "Buenos Aires", airport: "Ministro Pistarini International", country: "Argentina" },
  
  // Chile
  { code: "SCL", city: "Santiago", airport: "Arturo Merino Benítez International", country: "Chile" },
  
  // Colombia
  { code: "BOG", city: "Bogotá", airport: "El Dorado International", country: "Colombia" },
  
  // Peru
  { code: "LIM", city: "Lima", airport: "Jorge Chávez International", country: "Peru" },
  
  // Australia
  { code: "SYD", city: "Sydney", airport: "Sydney Kingsford Smith", country: "Australia" },
  { code: "MEL", city: "Melbourne", airport: "Melbourne", country: "Australia" },
  { code: "BNE", city: "Brisbane", airport: "Brisbane", country: "Australia" },
  { code: "PER", city: "Perth", airport: "Perth", country: "Australia" },
  { code: "ADL", city: "Adelaide", airport: "Adelaide", country: "Australia" },
  
  // New Zealand
  { code: "AKL", city: "Auckland", airport: "Auckland", country: "New Zealand" },
  { code: "CHC", city: "Christchurch", airport: "Christchurch International", country: "New Zealand" },
  { code: "WLG", city: "Wellington", airport: "Wellington International", country: "New Zealand" },
  
  // Other Africa
  { code: "LOS", city: "Lagos", airport: "Murtala Muhammed International", country: "Nigeria" },
  { code: "NBO", city: "Nairobi", airport: "Jomo Kenyatta International", country: "Kenya" },
  { code: "ADD", city: "Addis Ababa", airport: "Addis Ababa Bole International", country: "Ethiopia" },
  { code: "CMN", city: "Casablanca", airport: "Mohammed V International", country: "Morocco" },
  { code: "DAR", city: "Dar es Salaam", airport: "Julius Nyerere International", country: "Tanzania" },
  { code: "ZNZ", city: "Zanzibar", airport: "Abeid Amani Karume International", country: "Tanzania" },
  { code: "MRU", city: "Mauritius", airport: "Sir Seewoosagur Ramgoolam International", country: "Mauritius" },
  { code: "SEZ", city: "Mahé", airport: "Seychelles International", country: "Seychelles" },
  
  // Maldives
  { code: "MLE", city: "Malé", airport: "Velana International", country: "Maldives" },
  
  // Russia
  { code: "SVO", city: "Moscow", airport: "Sheremetyevo International", country: "Russia" },
  { code: "DME", city: "Moscow", airport: "Domodedovo", country: "Russia" },
];
