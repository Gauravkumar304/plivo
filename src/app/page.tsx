// import Image from "next/image";

import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Solution from "./components/Solution";
import Support from "./components/Support";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero/>
        <Price/>
        <Solution/>
        <Support/>
        <Faq/>
        <Footer/>
      </main>
    </div>
  );
}
