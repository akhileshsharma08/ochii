import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-[90vh] py-10 '>
        <div className="cards w-full flex justify-center items-center gap-2 px-10 py-4 ">
            <div className=" rounded-lg w-[50%] h-[60vh]  bg-teal-900 flex flex-col justify-center items-center">
                <h1 className='text-[4rem] text-yellow-200 '>Ochi</h1>
                <h1 className='px-3 rounded-full border border-yellow-200 my-6 text-yellow-200 capitalize'>&copy;2019-2022</h1>

            </div>
            <div className=" rounded-lg w-[25%] h-[60vh] text-zinc-50 bg-zinc-900 flex flex-col justify-center items-center">
            <h1 className='text-[4rem]  '>Clutch</h1>
            <h1 className=' text-yellow-200 text-2xl -mt-4'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></h1>
           
                <h1 className='px-3 rounded-full border my-6 capitalize'>rating 5.0 on Clutch</h1>
           
            </div>
            <div className=" rounded-lg w-[25%] h-[60vh] text-zinc-50 bg-zinc-900 flex flex-col justify-center items-center">
                <div className="imgdiv w-32 h-32 rounded-s-full overflow-hidden ">
                    <img className='object-cover rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
                <h1 className='px-3 rounded-full border my-6 capitalize'>Bootcamp Alumini</h1>

            </div>
        </div>
    </div>
  )
}

export default Cards