import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section background-img pt-100"
      style={{
        // backgroundImage: "url('img/hero-bg-4.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container first-hero">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-6">
            <div className="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-white">
              <h1 className="text-white">Afinidade Plus</h1>
              <p className="lead">
                O mais novo programa de Cashback chegando ao estado do Rio
                Grande do Norte
              </p>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-5 align-items-center"
            style={{ zIndex: 2 }}
          >
            <img src="img/phone-3.png" className="first-phone-image" />
          </div>
        </div>
      </div>
      <div className="section-shape position-absolute" style={{ zIndex: 1 }}>
        <img src="img/wave-shap.svg" alt="shape" style={{ zIndex: 1 }} />
      </div>
    </section>
  );
};

export default HeroSection;
