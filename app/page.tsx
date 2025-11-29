"use client";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import ServiceSection from "./components/ServiceSection";
import ReviewSection from "./components/ReviewSection";
import OurTeam from "./components/OurTeam";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import { FloatButton } from "antd";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <ServiceSection />
      <ReviewSection />
      <OurTeam />
      <PricingSection />
      <Footer />
      <FloatButton.BackTop type="primary" />
    </div>
  );
}
