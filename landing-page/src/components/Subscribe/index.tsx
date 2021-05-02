import React from "react";
import _data from "../../data";

const Subscribe: React.FC = () => {
  return (
    <section className="shape-img subscribe-wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              method="post"
              className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
            >
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control input"
                  id="email-footer"
                  name="email"
                  placeholder="info@yourdomain.com"
                />
                <input
                  type="submit"
                  className="button btn solid-btn"
                  id="submit-footer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
