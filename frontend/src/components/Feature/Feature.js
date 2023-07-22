import React from 'react';

const FeaturesSection= ()=> {
  return (
    <section className="features">
      <div className="features-container">
        <h2>Key Features</h2>
        <div className="feature">
          <i className="fa fa-user-plus"></i>
          <h3>Create Profiles</h3>
          <p>Build a comprehensive profile showcasing your skillsets, expertise, experience, and interests.</p>
        </div>
        <div className="feature">
          <i className="fa fa-users"></i>
          <h3>Find Compatible Team Members</h3>
          <p>Discover like-minded individuals with complementary skills and interests to form well-rounded teams.</p>
        </div>
        <div className="feature">
          <i className="fa fa-comments"></i>
          <h3>Collaborate Efficiently</h3>
          <p>Integrate a communication platform to seamlessly interact, discuss project details, and share updates.</p>
        </div>
        <div className="feature">
          <i className="fa fa-chart-line"></i>
          <h3>Track Project Progress</h3>
          <p>Monitor team progress, visualize task completion, and ensure successful project milestones.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
