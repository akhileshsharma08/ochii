import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10">
      <div className="content px-10 flex md:flex-row flex-col sm:justify-between justify-center items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-6xl text-4xl">
            EYE- <br />OPENING
          </h1>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-8xl text-4xl sm:py-0 py-4">Presentation</h1>
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
