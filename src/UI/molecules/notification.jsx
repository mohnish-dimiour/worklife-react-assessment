import React, { useState, } from "react";
import Notification from "react-web-notification";

// Allow React DevTools to work
window.React = React;

export const Notifications = ({
  setIgnore,
  ignore,
  title,
  options,
}) => {
  
  const handlePermissionGranted = () => {
    console.log("Permission Granted");
    setIgnore(false);
  };

  const handlePermissionDenied = () => {
    console.log("Permission Denied");
    setIgnore(true);
  };
  
  return (
    <div>
      <Notification
        ignore={ignore && title !== ""}
        onPermissionGranted={handlePermissionGranted}
        onPermissionDenied={handlePermissionDenied}
        timeout={5000}
        title={title}
        options={options}
      />
    </div>
  );
};
