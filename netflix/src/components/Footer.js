import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-[1024px] mx-auto h-24 flex justify-between items-center">
        <h6>Questions? Call 000-800-919-1694</h6>
        <div className="flex gap-6">
          <ul className="flex gap-6">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
