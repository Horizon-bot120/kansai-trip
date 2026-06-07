import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Itinerary from "../components/Itinerary";
import KansaiMap from "../components/KansaiMap";
import Highlights from "../components/Highlights";
import Tips from "../components/Tips";
import Budget from "../components/Budget";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Itinerary />
        <KansaiMap />
        <Highlights />
        <Tips />
        <Budget />
      </main>
      <Footer />
    </div>
  );
}
