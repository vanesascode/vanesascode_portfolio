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
    <div
      className="px-[5px] flex items-center  xs:flex-row max-xs:grid grid-cols-2 max-xs:mb-1
    
     xl:gap-[25px] md:gap-[20px] xs:gap-[18px] gap-[15px] "
    >
      <button onClick={handleTwitterShare}>
        {/*TWITTER */}
        <img
          src={
            lightMode === "light"
              ? "/blog/twitterx-white.svg"
              : "/blog/twitterx-black.svg"
          }
          alt="Twitter share icon"
          className="h-[12px] md:h-[15.5px]  xl:h-[20px]  "
        />
      </button>
      <button onClick={handleWhatsAppShare}>
        {/*WHASAPP */}
        <img
          src={
            lightMode === "light"
              ? "/blog/whatsapp-white.svg"
              : "/blog/whatsapp-black.svg"
          }
          alt=" share icon"
          className="h-[12px] md:h-[15px]  xl:h-[20px]  "
        />
      </button>

      <button onClick={handleLinkedInShare}>
        {/*LINKEDIN */}
        <img
          src={
            lightMode === "light"
              ? "/blog/linkedin-white.svg"
              : "/blog/linkedin-black.svg"
          }
          alt="linkedin share icon"
          className="h-[14px]  max-xs:ms-[-1px] 

          xs:mb-[0.5px] xs:h-[16px]

          sm:mb-0 
          
          md:mb-[-0.4px]  md:h-[19.5px]

          xl:mb-[-1px] xl:h-[26px]"
        />
      </button>
      <button onClick={handleEmailShare}>
        {/*EMAIL */}
        <img
          src={
            lightMode === "light"
              ? "/blog/email-white.svg"
              : "/blog/email-black.svg"
          }
          alt="email share icon"
          className="h-[12px]   mb-[-0.7px]

          xs:mb-[0px] xs:h-[14px]

          sm:mb-0 

          md:mb-[-1px] md:h-[18.5px] 

          xl:h-[24px]  xl:mb-[-1.5px] "
        />
      </button>
    </div>
  );
}
