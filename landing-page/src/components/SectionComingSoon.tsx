import React from "react";

const SectionComingSoon: React.FC = () => {
  return (
    <section
      className="hero-section ptb-100 background-img full-screen"
      style={{
        backgroundImage: "url('img/app-hero-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="hero-content-left text-white text-center">
              <h1 className="text-white">We're Coming Soon</h1>
              <p className="lead">
                Our website is under construction. We'll be here soon with our
                new awesome site, subscribe to be notified.
              </p>

              <div id="clock" className="countdown-wrap my-5"></div>

              <form method="post" className="subscribe-form text-center m-auto">
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control input"
                    placeholder="info@yourdomain.com"
                    required
                  />
                  <input
                    type="submit"
                    className="button btn solid-btn"
                    id="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComingSoon;
