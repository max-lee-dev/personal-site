import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/max-lee-dev/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/max._.rat/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/max-lee-dev"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
