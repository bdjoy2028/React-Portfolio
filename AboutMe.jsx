import React from 'react';
import profileImage from 'profile image';

const AboutMe = () => {
  return (
    <section id="about-me">
      <img src={profileImage} alt="./profile image" />
      <p>This is my React Portfolio!</p>
    </section>
  );
};

export default AboutMe;