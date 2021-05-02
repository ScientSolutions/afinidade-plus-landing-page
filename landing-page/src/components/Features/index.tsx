import React from "react";

const Feature: React.FC = () => {
  return (
    <section
      id="features"
      className="imageblock-section switchable switchable-content"
    >
      <div className="imageblock-section-img col-lg-5 col-md-4">
        <div
          className="background-image-holder"
          style={{
            backgroundColor: "#ffffff",
            opacity: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end"
          }}
        >
          <img src="img/businessman.png" height={750} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="row align-items-center ptb-100">
              <div className="col-lg-12">
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-1 rounded-circle">
                      <span className="ti-lock"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Solidez e segurança</h5>
                    <p className="mb-0">
                      Trouxemos para o novo <strong>Afinidade Plus</strong> a
                      experiência de mais de 20 anos de atuação em parceria com
                      os mais diversos segmentos, como lojas, cinemas,
                      universidades, clubes, restaurantes, associações,
                      escritórios, profissionais liberais...
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-2 rounded-circle">
                      <span className="ti-money"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Benefícios reais</h5>
                    <p className="mb-0">
                      Trabalhamos com parcerias inteligentes para trazer a você
                      apenas benefícios reais e significativos, fazendo assim
                      que você possa usufruir sempre mais do seu produto e
                      serviço preferido. E para você, parceiro, uma excelente
                      oportunidade de expandir e fidelizar a sua base de
                      clientes.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-3 rounded-circle">
                      <span className="ti-face-smile"></span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Sem asteriscos</h5>
                    <p className="mb-0">
                      Acreditamos que o termômetro do nosso sucesso é a sua real
                      satisfação. Todo nosso programa está pautado em
                      transparência, reciprocidade e percepção real da
                      necessidade dos nossos parceiros e clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
