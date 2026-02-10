import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import OrderingCTA from "@/components/OrderingCTA";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Menu />
      <Reviews />
      <Gallery />
      <Locations />
      <OrderingCTA />
      <About />
      <Footer />
    </main>
  );
}
