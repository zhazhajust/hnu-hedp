import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsTicker from "./components/NewsTicker";
import Research from "./components/Research";
import Team from "./components/Team";
import Publications from "./components/Publications";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <NewsTicker />
      <Research />
      <Team />
      <Publications />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;

