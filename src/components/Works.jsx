import React from 'react'

export default function Works() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl  leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
"Experience effortless shopping at its finest! Simply add your desired products to your cart, proceed to checkout, make your payment, and voila! Your selected items will be swiftly on their way to you, ready to enhance your life with convenience and style. Enjoy seamless shopping from the comfort of your own home with just a few clicks."</p>
        </div>

        <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 1 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Open landing page</h3>
                    <p class="mt-4 text-base text-gray-600">Whether you're here to explore our latest offerings, learn more about our brand, this landing page is your starting point for an unforgettable online experience.</p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Add products</h3>
                    <p class="mt-4 text-base text-gray-600">Explore our curated selection of premium goods, find the perfect item that speaks to you, and effortlessly add it to your cart with the click of a button</p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Proceed with Payment</h3>
                    <p class="mt-4 text-base text-gray-600">Whether you prefer credit card, debit card, or other payment methods, we've got you covered. Rest assured that your transactions are protected by state-of-the-art security measures, giving you peace of mind as you finalize your purchase</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
