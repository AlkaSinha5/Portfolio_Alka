import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const typedRef = useRef(null); // Define the ref

  useEffect(() => {
    if (typedRef.current) {
      console.log("Element Loaded:", typedRef.current.tagName);
      // Example: If using typed.js, initialize here
      // new Typed(typedRef.current, { strings: ["Developer", "Designer"], typeSpeed: 50 });
    }
  }, []);

  return (
    <div className="container-fluid d-flex align-items-center mb-5 py-5"
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        color: "white",
      }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div style={{
              width: "250px",
              height: "250px",
              transform: "rotate(45deg)",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
              border: "5px solid rgba(0, 255, 255, 0.3)"
            }}>
              <img className="img-fluid w-100 h-100" src="img/profile.jpg" alt="Profile"
                style={{ objectFit: "cover", transform: "rotate(-45deg)" }} />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="font-weight-normal mb-3">I'm</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2"
              style={{ WebkitTextStroke: "2px #ffffff" }}>
              Alka Sinha
            </h1>
            <h1>
              <span ref={typedRef} className="typed-text-output" style={{ color: "#fff" }}></span>
            </h1>

            {/* Buttons */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="img/Alka-Sinha.pdf" download className="btn btn-outline-light mr-5">Download CV</a>
              <a href="javascript:void(0);" className="btn btn-outline-light mr-5">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
