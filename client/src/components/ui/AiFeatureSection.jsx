import React from 'react';
import '@/style/AiFeatureSection.css'; // Import the CSS file

function AiFeatureSection() {
  return (
    <div className="ai-feature-section-reversed">
      <div className="ai-feature-text">
        <h2 className="ai-feature-heading">Integrated Chatbot for Seamless Experience</h2>
        <ul className="ai-feature-list">
          <li><span className="tick-icon">&#10003;</span> Query anything directly from our integrated chatbot.</li>
          <li><span className="tick-icon">&#10003;</span> No need to switch between platforms.</li>
          <li><span className="tick-icon">&#10003;</span> Enjoy smooth and uninterrupted conversations.</li>
          <li><span className="tick-icon">&#10003;</span> Enhance your chat experience with built-in AI assistance.</li>
        </ul>
      </div>
      <img
        src="https://img.freepik.com/free-vector/chatbot-artificial-intelligence-abstract-concept-illustration_335657-3723.jpg?w=1060&t=st=1726336274~exp=1726336874~hmac=a9947d062d0985910cd0bdcf4fa2d009fc4ee921892ef6ecf33673c02ab80c3a"
        alt="Chatbot AI"
        className="ai-feature-image"
      />
    </div>
  );
}

export default AiFeatureSection;
