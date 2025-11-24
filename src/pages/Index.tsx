import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import FeaturedDeals from "@/components/FeaturedDeals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TrustBar />
      <FeaturedDeals />
      <Footer />
    </div>
  );
};

export default Index;
