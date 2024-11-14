import React from "react";

const Nav = () => {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container-2 w-container">
        <a
          href="index.html"
          aria-current="page"
          className="brand w-nav-brand w--current"
        >
          <div>VASTR</div>
        </a>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a href="#faqs" className="nav-link w-nav-link">
            FAQ
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
