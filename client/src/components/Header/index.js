import React from "react";


function Header() {
  return (
    <div>
      <header className="container flex flex-vertical-center" id="go_to_top">
        <nav className="navbar navbar-expand-md custom-text-color-brand mr-auto">
          <a className="nav-link mx-0 mb-0 mr-0 h2  custom-text-color-brand kalam-font" href="./index" id="titleMenu">MARIUSZ BORUC</a>
          <button className="navbar-toggler custom-background-color custom-text-color" type="button" data-toggle="collapse" data-target="#contentMenu" aria-controls="contentMenu" aria-expanded="true" aria-label="hamburger">
            <span >
              <i className="fa fa-bars fa-1x custom-background-color" id="bars"></i>
            </span>
          </button>        
          <div className="collapse navbar-collapse custom-background-color" id="contentMenu">
            <ul className="navbar-nav mr-auto custom-text-color">
                <li className="nav-item mx-5"></li>
                <li className="nav-item mx-3"><a className="nav-link active custom-text-color kalam-font" href="./resume">RESUME</a></li>
                <li className="nav-item mx-3"><a className="nav-link active custom-text-color kalam-font" href="./portfolio">PORTFOLIO</a></li>
                <li className="nav-item mx-3"><a className="nav-link active custom-text-color kalam-font" href="./gallery">GALLERY</a></li>
                <li className="nav-item mx-3"><a className="nav-link active custom-text-color kalam-font" href="./contact">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
