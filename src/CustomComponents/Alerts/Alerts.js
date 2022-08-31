import React, { useEffect, useState } from "react";
import "./Alerts.css";

const Message = ({ variant, children, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    // To clear or cancel a timer, you call the clearTimeout(); method,
    // passing in the timer object that you created into clearTimeout().

    return () => clearTimeout(timer);
  }, []);

  return <div className={`alert alert-${variant}`}>{children}</div>;
};

export default Message;
