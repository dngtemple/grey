import React, { useEffect, useRef } from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import{dataContext} from "./Checkout";




export default function Pay() {

    const nav =useNavigate()
  const [email, setEmail] = useState('');

  const userEmail=JSON.parse(localStorage.getItem("grey_man")).email;
  const userID=JSON.parse(localStorage.getItem("grey_man")).userID;

  let [p,setp]=useState(false);

  let totalprice=useContext(dataContext);

  let [amount, setAmount] = useState(0);

  useEffect(function(){
  setAmount(totalprice)
  setEmail(userEmail);

    
  },[totalprice])


  useEffect(function(){
    if(p){
        console.log("re-rendere");
    }
  },[])


  function Success(){
    Swal.fire("Your payment has been received.Thank you for shopping with us!");
}

function Fail(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Payment timeout.Please Try again later",
      });
}



function Success2(){
    Swal.fire("Please wait. You'll be redirected to another page");

}



  function DeleteAll(){
    fetch(`http://localhost:8000/cart/cart/delete-all/${userID}`,{
      method:"DELETE"
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        if(data.success===true){
            setp(true)
        }
    })
    .catch(function(err){
        console.log(err);
    })
  }

  function VerifyPay(){
    fetch(`http://localhost:8000/cart/verify/pay`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if(data.success===true){
            DeleteAll();
            Success()
            nav("/")
        }
        else{
            Fail()
        }
    })
    .catch(function(err){
        console.log(err);
    })
  }




  function pay(){
    fetch("http://localhost:8000/cart/paystack",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({amount:amount*100,email:email})
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        if(data.success===true){
            Success2()
            let link=JSON.parse(data.data)

            console.log(link);

            let LINK=link.data['authorization_url']
            console.log(LINK)
            
            window.open(`${LINK}`, '_blank');

            setTimeout(function(){
                VerifyPay()
            },180000)

            
        }
    })
    .catch(function(err){
        console.log(err)
    })
  }

 



  return (
    <div>
    
        
            <form className="w-full bg-white p-10">
                
                <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
                    This might take a couple of minutes
                </h1>
                <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                "Please note that payment must be completed within <span className=' text-red-500 font-semibold'>2 minute</span>  of initiating the transaction. After this period, the transaction will expire, and you may need to start the payment process again. Thank you for your understanding."<br />
                    
                </p>
                
                
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Email Address</label>
                        <input defaultValue={userEmail} disabled onChange={function(e){
                            // setEmail(e.target.value)
                        }} required type="email" tabIndex={0} aria-label="Enter email Address" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                    </div>

                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Total Price</label>
                        <input defaultValue={totalprice} disabled
                         type="number" tabIndex={0} aria-label="Enter phone number" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                    </div>
                    
                </div>
                
                
                <button type='button' onClick={function(){
                    pay();
                }} role="button" aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                    <span className="text-sm font-medium text-center text-gray-800 capitalize">Make Payment</span>
                    <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                    </svg>
                </button>
            </form>
            
            </div>

    
    
        
  )
}
