import React from "react";

const Download: React.FC = () => {
  return (
    <section
      className="download-section pt-100"
      style={{
        backgroundColor: "#3A3E93",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <div className="download-content text-white pb-100">
              <h2 className="text-white">
                Start Managing your apps business, more faster
              </h2>
              <p className="lead">
                Objectively deliver professional value with diverse
                web-readiness. Collaboratively transition wireless customer
                service without goal-oriented catalysts for change.
                Collaboratively.
              </p>

              <div className="download-btn">
                <a href="/#" className="btn google-play-btn mr-3">
                  <span className="ti-android"></span> Google Play
                </a>
                <a href="/#" className="btn app-store-btn">
                  <span className="ti-apple"></span> App Store
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="download-img d-flex align-bottom">
              <img
                src="img/app-hand-top.png"
                alt="download"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
