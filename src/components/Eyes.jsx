import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });


  return (
    <div  className="w-full h-screen ">
      <div data-scroll data-scroll-speed=".7" className=" relative EyebgImage w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex justify-center items-start gap-4 eyeContainer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="singleEye flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
            <div className="iris relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] irisline w-full h-10 ">
                <div className="whiteDot w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="singleEye flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
            <div className="iris relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] irisline w-full h-10 ">
                <div className="whiteDot w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
