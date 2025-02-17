import Faq from "@/sections/faq";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import UserReviews from "@/sections/user-reviews";
import React from "react";

export default function Home(): React.ReactNode {
  return (
    <div className="bg-[#000]">
      <Hero />
      <Features />
      <Faq />
      <UserReviews />
    </div>
  );
}
