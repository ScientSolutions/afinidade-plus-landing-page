import React from "react";
import _data from "../../data";

interface PricingProps {
  bgColor?: string;
  showTitle?: boolean;
  hideFaq?: boolean;
  theme: string;
}

const Pricing: React.FC<PricingProps> = ({
  bgColor,
  showTitle,
  hideFaq,
  theme,
}) => {
  return (
    <div className="overflow-hidden">
      <section
        id="pricing"
        className={
          "package-section ptb-100 " +
          (bgColor && bgColor === "gray"
            ? "gray-light-bg"
            : "background-shape-right")
        }
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                {showTitle && (
                  <span className="badge badge-primary badge-pill">
                    Our Pricing Package
                  </span>
                )}
                <h2 className="pb-4">Sobre o Afinidade Plus</h2>
                <p className="lead">
                  O Afinidade Plus é o mais novo programa de Cashback chegando
                  ao estado do Rio Grande do Norte, surgindo como uma evolução
                  do tradicional programa de descontos Afinidade Club, em
                  atuação há mais de 20 anos na capital e interior do RN.
                </p>
                <p className="lead">
                  O programa Afinidade Club, em todo seu histórico de atuação,
                  já reuniu cerca de 320 empresas participantes, tendo mais de
                  55 mil associados, dentre esses, toda comunidade da
                  Universidade Potiguar (alunos, professores, ex-alunos,
                  funcionários e dependentes) entre outras renomadas empresas e
                  associações de classe parceiras que possuem seu cartão de
                  descontos personalizado.
                </p>
                <p className="lead">
                  Acompanhando as inovações tecnológicas e de mercado, agora o
                  Afinidade Plus traz à sua rede exclusiva de parceiros e
                  usuários muito mais praticidade, modernidade e benefícios
                  reais, através de uma sólida estrutura tecnológica com
                  parcerias inteligentes, que trarão vantagens reais e
                  satisfatórias para que você continue usufruindo e consumindo
                  os seus produtos e serviços preferidos.
                </p>
                <p className="lead">
                  Faça já o seu pré-cadastro e seja um dos primeiros a ter
                  acesso ao mundo de benefícios, promoções e recompensas que
                  estão chegando, aí pertinho de você!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pricing;
