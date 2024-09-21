import "./scrollUp.scss";
import { ChevronLeft } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const ScrollUp = () => {

  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      // console.log("Window Height: " + heroHeight);
      if (window.scrollY >= 0) {
        setShowButton(true);
        // console.log("Scrolled");
      } else {
        setShowButton(false);
        // console.log("Not Scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // console.log("ShowButton State: " + showButton);
  // console.log("Window ScrollY: "+ window.scrollY);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("Up")
  };

  return (
    <>
      {showButton && (
        <div className="scrollUp" onClick={scrollToTop}>
          <div className="buttonHold">
            <button>
              <ChevronLeft />
            </button>
          </div>
        </div>
      )}
    </>
  )
};

export default ScrollUp;