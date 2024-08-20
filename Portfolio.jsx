import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;