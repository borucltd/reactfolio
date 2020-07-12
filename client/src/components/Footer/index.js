import React from "react";


function Footer() {
  return (
    <div>
      <footer className="container-fluid mt-3 fixed-bottom">
        <section className="navbar navbar-dark d-flex justify-content-center  rounded shadow-lg ">
            <section className="bottom-bar">
              <a href="./index.html"><i className="fa fa-home bottomfa custom-text-color-footy"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-level-up bottomfa custom-text-color-footy"></i></a>
              <a href="./contact.html" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope bottomfa custom-text-color-footy"></i></a>
              <a href="https://twitter.com/Colonel_Moralez" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square bottomfa custom-text-color-footy"></i></a>
              <a href="https://github.com/borucltd" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square bottomfa custom-text-color-footy"></i></a>
              <a href="https://www.linkedin.com/in/mariusz-boruc-a7402a74" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square bottomfa custom-text-color-footy"></i></a>
            </section>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
