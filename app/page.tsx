"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeBring from "@/components/WhatWeBring";
import WhyTiffy from "@/components/WhyTiffy";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const mixpanel_token = "cecc77b96d82ce401449295f6e11ade4";
    mixpanel.init(mixpanel_token, {
      debug: false,
      track_pageview: true,
      track_links_timeout: 300,
      persistence: "localStorage",
    });
    // console.log("Mixpanel enabled. Token", mixpanel_token);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Header />
      <HeroSection />
      <WhatWeBring />
      <WhyTiffy />
    </main>
  );
}
