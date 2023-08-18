import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support",
  description: "",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
    </div>
  );
};

export default SupportPage;
