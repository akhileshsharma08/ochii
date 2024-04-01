import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-[90vh] py-20 mb-36 ">
      {/*  */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-teal-900 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
              <div className="mx-auto max-w-xl text-center flex flex-col justify-center items-center">
                <h1 className="text-[4rem] text-yellow-200 ">Ochi</h1>
                <h1 className="px-3 w-1/2 md:w-1/4 rounded-full border border-yellow-200 my-6 text-yellow-200 capitalize">
                  &copy;2019-2022
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 ">
              <div className=" rounded-lg  h-[60vh] text-zinc-50 bg-zinc-900 flex flex-col justify-center items-center">
                <h1 className="md:text-[4rem] text-[2rem]  ">Clutch</h1>
                <h1 className=" text-yellow-200 text-2xl -mt-4">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </h1>

                <h1 className="px-3 rounded-full border md:my-6 my-10 capitalize">
                  rating 5.0 
                </h1>
              </div>

              <div className=" rounded-lg  h-[60vh] text-zinc-50 bg-zinc-900 flex flex-col justify-center items-center">
                <div className="imgdiv w-16 h-16 rounded-s-full overflow-hidden ">
                  <img
                    className="object-cover rounded-full"
                    src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                    alt=""
                  />
                </div>
                <h1 className="px-3 rounded-full border my-6 capitalize">
                  Bootcamp Alumini
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
     
    </div>
  );
};

export default Cards;
