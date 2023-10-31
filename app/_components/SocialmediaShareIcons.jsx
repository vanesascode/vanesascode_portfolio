import React from "react";

import { useContext, useState } from "react";

import DataContext from "../_context/DataContext";

export default function SocialmediaShareIcons({ pill }) {
  const { lightMode } = useContext(DataContext);

  // share in social media:

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href //returns the full URL of the current page
    )}&text=${encodeURIComponent(`"${pill.subtitle} (by vanesascode)`)}`;
    window.open(url, "_blank");
  };

  const handleEmailShare = () => {
    const subject = "Check out this web development tip by vanesascode";
    const body = `I wanted to share with you this tip about web development by vanesascode:\n\n${pill.subtitle}\n\nCheck it out at: ${window.location.href}`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppShare = () => {
    const message = `Check out this web development article by vanesascode: ${pill.subtitle}\n\n${window.location.href}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div className="px-[5px] flex items-center gap-[10px] xs:flex-row max-xs:grid grid-cols-3 max-xs:mb-1">
      <button onClick={handleFacebookShare}>
        <img
          src={
            lightMode === "light"
              ? "/blog/facebook-white.svg"
              : "/blog/facebook-black.svg"
          }
          alt="facebook share icon"
          className="h-[10px] md:h-[15px]  xl:h-[20px]  "
        />
      </button>
      <button onClick={handleTwitterShare}>
        <img
          src={
            lightMode === "light"
              ? "/blog/twitterx-white.svg"
              : "/blog/twitterx-black.svg"
          }
          alt="facebook share icon"
          className="h-[10px] md:h-[15px]  xl:h-[20px]  "
        />
      </button>
      <button onClick={handleWhatsAppShare}>
        <img
          src={
            lightMode === "light"
              ? "/blog/whatsapp-white.svg"
              : "/blog/whatsapp-black.svg"
          }
          alt="facebook share icon"
          className="h-[10px] md:h-[15px]  xl:h-[20px]  "
        />
      </button>

      <button onClick={handleLinkedInShare}>
        <img
          src={
            lightMode === "light"
              ? "/blog/linkedin-white.svg"
              : "/blog/linkedin-black.svg"
          }
          alt="linkedin share icon"
          className="h-[12px] md:h-[16px]  xl:h-[23px] mb-[-0.7px] md:mb-[-2px] "
        />
      </button>
    </div>
  );
}
