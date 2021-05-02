import React from "react";
import _data from "../../data";
import stores from "../../data/stores.json";

const Screenshots: React.FC = () => {
  return (
    <section
      id="screenshots"
      className="screenshots-section ptb-100 gray-light-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <h2>
                Nossos parceiros <br />{" "}
                <span>Confira os parceiros do nosso clube de vantagens</span>
              </h2>
              {/* <p className="lead">
                Credibly synthesize multimedia based networks vis-a-vis top-line
                growth strategies. Continually leverage existing worldwide
                interfaces{" "}
              </p> */}
            </div>
          </div>
        </div>
        <div className="screen-slider-content mt-5">
          <div className="screen-carousel owl-carousel owl-theme">
            {stores.map((store) => (
              <img src={store.image} className="img-fluid" alt="screenshots" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
