import React from "react";

import './Notification.css';

function Notification({ notificationMessage = 'test' }) {

  return (
    <p className="notification-message">{notificationMessage}</p>
  );
};

export default Notification;