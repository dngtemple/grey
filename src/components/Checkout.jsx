import React, { createContext, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Pay from "./Pay"

export  const dataContext=createContext()


 function Checkout() {
  const nav=useNavigate()


  const userID=JSON.parse(localStorage.getItem("grey_man")).userID;
  const token=JSON.parse(localStorage.getItem("grey_man")).token;

  let [cartproducts,setcartproducts]=useState([]);

  let [quantity,setquantity]=useState()

  let [total,settotal]=useState()
  let [del,setdel]=useState(false)


  function getCartData()
  {
    fetch(`http://localhost:8000/cart/one/getcartdata/${userID}`,{
      method:"GET"
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        if(data.success===true){
          setcartproducts(data.data);
        }
 
    })
    .catch(function(err){
        console.log(err);
    })
  }


  function deleteCart(id){
    fetch("http://localhost:8000/cart/cart/"+id,{
      method:"DELETE",
      headers:{
        "Authorization":`Bearer ${token}`,
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)

      if(data.success===true){
        let products=[...cartproducts];

        let index=products.findIndex(function(p,i){
          return id===p._id
        })

        products.splice(index,1)

        setcartproducts(products);


      }
      else if(data.message==="Invalid token"){
        nav("/sign-in");
      }
    })
    .catch(function(err){
      console.log(err)
    })
  }

  function updateQuantity(id,quant){
    let quanti=parseInt(quant)
    fetch("http://localhost:8000/cart/cart/update/"+id,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({quantity:quanti})
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)

      if(data.success===true){
       
        
              
      }
    })
    .catch(function(err){
      console.log(err)
    })
  }

  useEffect(function(){
    getCartData();    
  },[total,quantity,del])

  useEffect(function(){
    getCartData();
  },[cartproducts])



  useEffect(function(){
    let totalamount=0;
                  
    cartproducts.forEach(function(p,i){
    totalamount+=p.product.price*p.quantity
    })
    settotal(totalamount)

  },[total,cartproducts])

  function Success(){
    Swal.fire("Your order has been placed.Please make payment now to validate your order!");
  }


  function placeOrder(){

    let order={};

    order["products"]=cartproducts.map(function(p,i){
      return (
        p.product._id
      )
    })


    order["user"]=userID;
    order["totalPrice"]=total;

    

    fetch("http://localhost:8000/product/orders/placement/",{
      method:"POST",
      headers:{
        "Authorization":`Bearer ${token}`,
        "content-type":"application/json"
      },
      body:JSON.stringify(order)
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)

      if(data.message==="Invalid token"){
        nav("/sign-in");

      }
      else if(data.success===true){
        Success()
        
      }

    })
    .catch(function(err){
      console.log(err)
    })
  }
  


  // console.log(cartproducts);


  return (
    <>
    
    <section class=" min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>
    <div class="flex items-center justify-center">
      <h5 class="text-l font-semibold text-gray-600">This may take a while , please wait or refresh...</h5>
    </div>
     
    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">

            {
              cartproducts.map(function(p,i){
                return(
                  <li key={i} class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={p.product.image}  />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{p.product.name}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">LUXURY</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">GHS-{p.product.price*p.quantity}</p>

                      <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          {/* <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button> */}
                          <input type='number' defaultValue={p.quantity} class="flex w-full text-center  border-2 items-center justify-center bg-gray-100 px-4 text-xs uppercase transition" onChange={function(e){
                            setquantity(e.target.value)
                            updateQuantity(p._id,e.target.value)
                          }}/>
                          {/* <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button onClick={function(){
                      deleteCart(p._id)
                    }} type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
                )
              })
            }
              
            </ul>
          </div>

          <div class="mt-6 border-t border-b py-2">
            
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Price</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">GHS</span>-{total}</p>
          </div>

          <div class="mt-6 text-center">
            
            <button onClick={function(){
              window.scroll(0,450);

              placeOrder();
            }} type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Place Order
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<dataContext.Provider value={total}>
      <Pay/>
</dataContext.Provider>

{/* <Pay/> */}

<Footer/>

</>

  )
}

export default Checkout;
