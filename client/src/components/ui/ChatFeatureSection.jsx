import React from 'react'

import '@/style/ChatFeatureSection.css'; // Import the CSS file

function ChatFeatureSection() {
  return (
    <div className="chat-feature-section">
      <img
        src="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"
        alt="Chat Features"
        className="chat-feature-image"
      />
      <div className="chat-feature-text">
        <h2 className="chat-feature-heading">Stay Connected with Ease</h2>
        <ul className="chat-feature-list">
          <li><span className="tick-icon">&#10003;</span> Chat privately with friends and family.</li>
          <li><span className="tick-icon">&#10003;</span> Create group chats to stay connected with loved ones.</li>
          <li><span className="tick-icon">&#10003;</span> Share personal moments or collaborate on projects.</li>
          <li><span className="tick-icon">&#10003;</span> Enjoy real-time messaging with instant notifications.</li>
          <li><span className="tick-icon">&#10003;</span> Manage conversations seamlessly, wherever you are.</li>
        </ul>
      </div>
    </div>
  );
}

export default ChatFeatureSection;
