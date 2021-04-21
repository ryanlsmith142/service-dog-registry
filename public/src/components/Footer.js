import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© {year}. Service Dog Registry All rights reserved.</p>
    </div>
  );
};

export default Footer;
