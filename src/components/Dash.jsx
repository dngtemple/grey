import React, { useEffect, useState } from 'react'

export default function Dash() {

  let [orders,setorders]=useState()

  useEffect(function(){
    fetch("http://localhost:8000/product/orders/getallorders/",{
      method:"GET"
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)

      if(data.success==true){
        setorders(data.data)
      }
    })
    .catch(function(err){
      console.log(err)
    })

  },[])



  return (
    <>
    <div class="mx-auto max-w-screen-xl bg-white">
  <h1 class="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">Order Management</h1>
  
</div>
<div class="w-screen bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-2 py-10">
    

    <div class="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
      <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
        <thead class="hidden border-b lg:table-header-group">
          <tr class="">
            <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
              Order Date
              <svg xmlns="http://www.w3.org/2000/svg" class="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Order ID</td>


            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Customer</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Products</td>


            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
              Price
              <svg xmlns="http://www.w3.org/2000/svg" class="float-right mt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </td>

          </tr>
        </thead>

        <tbody class="bg-white lg:border-gray-300">


          {
            orders && orders.map(function(a,i){
              return(
                <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              {a.createdAt}
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {a.user.name}-{a.user.contact}
                </div>

                <div>
                {
                a.products.map(function(a,i){
                  return(
                    <li>{a.name}</li>
                  )
                })
               }

                </div>
                
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{i+1}</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{a.user.name}-{a.user.contact}</td>

            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
              {
                a.products.map(function(a,i){
                  return(
                    <li>{a.name}</li>
                  )
                })
              }
            </td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              <i className='fa-solid fa-cedi-sign'></i>{a.totalPrice}
            </td>

            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              {a.products.quantity}
            </td>

        
          </tr>

              )
            })
            
          }
          
          
        </tbody>
      </table>
    </div>
  </div>
</div>
</>


  )
}
