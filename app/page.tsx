import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import TopStories from "@/components/TopStories";
import TickerBand from "@/components/TickerBand";
import Categories from "@/components/Categories";
import Investigations from "@/components/Investigations";
import LiveBroadcast from "@/components/LiveBroadcast";
import Voices from "@/components/Voices";
import Network from "@/components/Network";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-paper">
      <Navbar />
      <Hero />
      <Trending />
      <TopStories />
      <TickerBand tone="dark" />
      <Categories />
      <Investigations />
      <TickerBand tone="light" />
      <LiveBroadcast />
      <Voices />
      <Network />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
