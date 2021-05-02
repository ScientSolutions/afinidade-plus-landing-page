import React from "react";

import FaqSection from "../components/Faq";
import SectionAbout from "../components/SectionAbout";

const FAQ: React.FC = () => {
  return (
    <main className="main">
      <SectionAbout />
      <article className="container mt-5 mb-5">
        <section className="row px-3">
          <h2 className="text-primary mb-3">O que é o Afinidade Club?</h2>
          <p className="lead">
            O Afinidade Club é um programa de empresas parceiras. Com cerca de
            320 empresas participantes no RN e 55 mil associados. Dentre esses,
            40 mil UnP (alunos, professores, ex-aunos, funcionários e
            dependentes) e 15 mil oriundos das empresas parceiras que possuem
            seu cartão fidelidade personalizado.
          </p>
          <p className="lead">
            São 55 mil cartões circulando diariamente no RN. O Afinidade Club é
            o maior shopping center a céu aberto do estado. Aproveite e faça
            parte também.
          </p>
        </section>
        <section className="row px-3">
          <h2 className="text-primary mb-3">Como funciona?</h2>
          <p className="lead">
            O integrante da comunidade UnP ou o cliente preferencial de qualquer
            empresa parceira solicita o seu cartão e tem acesso a descontos e/ou
            serviços preferenciais em toda a Rede Afinidade Club. São mais de
            320 empresas entre concessionárias, cinema, lojas, restaurantes,
            centros de estética, clínicas, hotéis… E a sua empresa pode estar
            inserida nesta rede contando com a divulgação do Afinidade Club, das
            empresas parceiras e com um público altamente segmentado, muitos
            deles formadores de opinião e ávido por novidades e promoções.
          </p>
        </section>
      </article>
    </main>
  );
};

export default FAQ;
