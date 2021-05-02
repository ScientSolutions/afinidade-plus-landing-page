import React from "react";

interface HeaderProps {
  bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ bgColor }) => {
  return (
    <header className="header">
      <nav
        className={
          "navbar navbar-expand-lg fixed-top custom-nav white-bg"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/logos/afinidade-plus-logo.svg"
              width="160"
              alt="logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu"></span>
          </button>

          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Vantagens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">
                  Nossa História
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
