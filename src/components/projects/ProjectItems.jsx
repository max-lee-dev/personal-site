import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <a href={item.link1} target="_blank">
        <img src={item.image} alt="" className="project__img" />
      </a>
      <h3 className="project__title">{item.title}</h3>
      {item.link1 && (
        <a href={item.link1} className="project__button" target="_blank">
          <i className="bx bx-link project__button-icon"></i>Demo
        </a>
      )}
      {item.link2 && (
        <a href={item.link2} className="project__button" target="_blank">
          <i className="bx bxl-github project__button-icon"></i>GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectItems;
