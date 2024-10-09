import React from 'react';
import './Portfolio.css'; // Ensure the path is correct based on your file structure

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-heading">Our Portfolio</h2>
      <div className="projectList">
        <div className="projectItem">
          <img
            src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectOne.png" // Replace with your S3 URL
            alt="Project 1"
            className="imageStyle"
          />
          <h3 className="projectTitle">Bank Systems</h3>
          <p className="projectDescription">Web app for managing business workflows.</p>
        </div>
        <div className="projectItem">
          <img
            src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectTwo.png" // Replace with your S3 URL
            alt="Project 2"
            className="imageStyle"
          />
          <h3 className="projectTitle">Point Of Sale</h3>
          <p className="projectDescription">E-commerce platform for small businesses.</p>
        </div>
        <div className="projectItem">
          <img
            src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectThree.png" // Replace with your S3 URL
            alt="Project 3"
            className="imageStyle"
          />
          <h3 className="projectTitle">Hotel Management Systems</h3>
          <p className="projectDescription">Custom CRM software for better client relationships.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;