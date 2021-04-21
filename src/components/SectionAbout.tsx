import React from "react";

const SectionAbout: React.FC = () => {
  return (
    <section
      className="hero-section ptb-100 background-img"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h1 className="text-white mb-0">Nossa História</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
