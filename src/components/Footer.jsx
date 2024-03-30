import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10">
      <div className="content px-10 flex justify-between items-center">
        <div className="w-1/3">
          <h1 className="text-6xl">
            EYE- <br />
            OPENING
          </h1>
        </div>
        <div className="w-1/2">
          <h1 className="text-8xl">Presentation</h1>
          <ul className="flex justify-center items-center gap-5 capitalize">
            <li>instagram</li>
            <li>facebook</li>
            <li>dribble</li>
          </ul>
        </div>
      </div>
      {/* <h1 className="text-center py-2">Powered By Ochi.Designes</h1> */}
    </div>
  );
};

export default Footer;
