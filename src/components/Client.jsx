import React from "react";

const Client = () => {
  return (
    <div className="w-full">
      <div className="conatiner text-zinc-800 ">
        <h1 className="text-6xl pb-6 border-b border-gray-400">
          Clients’ reviews
        </h1>
        <div className="mtable flex justify-center items-start py-2 ">
          <div className="w-1/2 flex justify-between ">
            <div className="w-1/2">
              <h1>Karman Ventures</h1>
            </div>
            <div className="w-1/2">
              <h1>Services</h1>
              <div className="serv w-1/2 uppercase">
                <h4 className="px-2 rounded-full border border-zinc-700 my-2">
                  inverstor deck
                </h4>
                <h4 className="px-2 w-2/3 rounded-full border border-zinc-700 my-2">
                  sales deck
                </h4>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-1/2">
              <h1>William Barnes</h1>
              <div className="content">
                <img
                  className="w-24 h-24 my-4 rounded-md object-cover"
                  src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                  alt=""
                />
                <h5>
                  They were transparent about the time and the stages of the
                  project. The end product is high quality, and I feel confident
                  about how they were handholding the client through the
                  process. I feel like I can introduce them to someone who needs
                  to put a sales deck together from scratch, and they would be
                  able to handhold the client experience from 0 to 100 very
                  effectively from story to design. 5/5
                </h5>
              </div>
            </div>
            <div className="w-1/2 text-zinc-500 float-end">Read</div>
          </div>
        </div>
        <div className="dtable my-6">
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Planetly</h5>
            <h5>Nina Walloch</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Workiz Easy</h5>
            <h5>Tomer Levy</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Premium Blend</h5>
            <h5>Ellen Kim</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Hypercare Systems</h5>
            <h5>Brendan Goss</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Officevibe</h5>
            <h5>Raff Labrie</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Orderlion</h5>
            <h5>Stefan Strohmer</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>

          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Black Book</h5>
            <h5>Jaci Smith</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>

          <div className="item flex justify-between items-center py-4 border-b border-zinc-400 text-start">
            <h5>Trawa Energy</h5>
            <h5>David Budde</h5>
            <a href="#"><h5>READ</h5></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
