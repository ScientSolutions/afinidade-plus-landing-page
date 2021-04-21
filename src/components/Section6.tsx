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
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-6">
            <div className="hero-content-left position-relative mt-lg-0 mt-md-0 mt-5 text-white">
              <h1 className="text-white">
                <span>Build anything</span> That you want
              </h1>
              <p className="lead">
                Progressively monetize cost effective innovation vis-a-vis
                cross-unit infrastructures. Uniquely e-enable front-end core
                competencies vis-a-vis premier.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-lg-5">
            <div className="sign-up-form-wrap position-relative rounded p-5 gray-light-bg mt-5">
              <div className="sign-up-form-header text-center mb-4">
                <h4 className="mb-0">Get a quote today</h4>
                <p>Get response within 24 hours</p>
              </div>
              <form method="post" className="sign-up-form">
                <div className="form-group input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group input-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div className="form-group input-group">
                  <textarea
                    name="message"
                    id="msg"
                    className="form-control"
                    placeholder="Write your message"
                    cols={30}
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="btn solid-btn btn-block"
                  />
                </div>
                <div className="form-check d-flex align-items-center text-center">
                  <input
                    checked={true}
                    type="checkbox"
                    name="isAgreed"
                    className="form-check-input mt-0 mr-3"
                    id="ckbAgree"
                  />
                  <label className="form-check-label" htmlFor="ckbAgree">
                    I agree your <a href="/#">terms & conditions</a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shape position-absolute">
        <img src="img/wave-shap.svg" alt="shape" />
      </div>
    </section>
  );
};

export default HeroSection;
