import React from "react";
import _data from "../../data";

const TeamMember: React.FC = () => {
  return (
    <section id="team" className="team-member-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="section-heading text-center mb-5">
              <h2>Empresas e parceiros</h2>
              <p className="lead">
                O novo <strong>Afinidade Plus</strong> foi carinhosamente
                pensado para que você, empresário, lojista ou gestor de
                associações, possa oferecer descontos e benefícios reais para os
                seus clientes e associados mais fiéis, através de um sistema
                moderno que integra aplicativo + interface web, tornando
                acessível ao seu negócio ou organização o uso das tecnologias
                mais modernas a um excelente custo benefício, além de poder
                acompanhar em tempo real as informações sobre as ações em
                parceria com o programa e dando assim uma enorme exposição à sua
                marca, sempre associada à toda rede de parceiros do{" "}
                <strong>Afinidade Plus</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[].map((member, index) => {
            return (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-team-member position-relative">
                  <div className="team-image">
                    <img
                      src={member.image}
                      alt="Team Members"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">{member.name}</h5>
                    <h6>{member.designation}</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="/#">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
