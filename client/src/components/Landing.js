import React from "react";

const Landing = () => {
  return (
    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Congress: The Game</strong>
            </h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">
              A Fantasy Sports Style Approach To Politics
            </p>
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="#about"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
