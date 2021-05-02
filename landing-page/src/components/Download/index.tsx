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
              <h2 className="text-white">Baixe Agora</h2>
              <p className="lead">
                Não perca tempo e cadastra-se e tenha acesso a todos os
                benefícios
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
              <img src="img/phone-2.png" alt="download" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
