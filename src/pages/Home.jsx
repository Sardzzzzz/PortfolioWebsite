import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-white pt-16">
      <Hero />
      <Footer />
    </main>
  );
}
