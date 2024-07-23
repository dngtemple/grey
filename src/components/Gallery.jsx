import React from 'react'
import { Link } from 'react-router-dom';

import img1 from "../assets/image.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";


export default function Gallery() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-3xl mx-auto text-center">
            <p class="text-l  leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Greyman Luxury</p>
            <p class="max-w-2xl mx-auto mt-4 text-l text-gray-600">"Step into comfort and style with our exquisite collection of traditional slippers. Crafted with care and precision, each pair embodies timeless elegance and unmatched comfort. Made from premium materials, our slippers ensure durability and long-lasting wear. Whether you're lounging at home or stepping out in casual elegance, our traditional slippers are the perfect companion for every occasion. Elevate your footwear game and experience luxury for your feet with our finely crafted selection."</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12 round">
            <div>
                <img class="w-full" src={img1} alt="" />
            </div>

            <div>
                <img class="w-full" src={img2} alt="" />
            </div>

            <div>
                <img class="w-full" src={img3} alt="" />
            </div>
            
        </div>

        <div class="mt-8 text-center md:mt-16">
           <Link to={"/checkout"}> <a title="" class="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md px-14 hover:bg-gray-700 focus:bg-blue-700" role="button">Go to Cart</a></Link>
        </div>
    </div>
</section>

  )
}
