import React from "react";
import _data from "../../data";

const PromoSection: React.FC = () => {
  return (
    <section className="promo-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="section-heading text-center mb-5">
              <h2>Encontre os melhores lugares</h2>
              <p className="lead">
                Aproveite todas as vantagens e benefícios nos seus locais
                preferidos na palma da sua mão
              </p>
            </div>
          </div>
        </div>
        <div className="row equal">
          {/* Promo Itens */}
          {[
            { title: "LoremIpsium", description: "loren", icon: "" },
            { title: "LoremIpsium", description: "loren", icon: "" },
            { title: "LoremIpsium", description: "loren", icon: "" },
          ].map((item) => {
            return (
              <div className="col-md-4 col-lg-4" key={item.title}>
                <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                  <div className="circle-icon mb-5">
                    <span className={item.icon}></span>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
