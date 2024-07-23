import React from 'react'

import img from "../assets/ban2.jpg"

export default function Banner() {
  return (
    <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                <div className="flex items-center bg-gray-800 justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">20% OFF</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Tmeless comfort with our traditional slippers!</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">Embrace the classic style and cozy warmth while enjoying a limited-time offer of 20% off. Don't miss out—act now before this deal slips away!</p>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src={img} alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="xl:hidden h-full" src={img} alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            {/* <div className="md:hidden mt-6 w-full">
                <img src={img} alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div> */}
        </div>
    
  )
}
