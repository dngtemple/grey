import React from 'react'
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Reset() {

    const nav=useNavigate()
    const params =useParams()
    // console.log(params.token)

    let token=params.token;

    let password=useRef({});

    function ReadValue(property,value){
        password.current[property]=value;

    }

    function Success(){
        Swal.fire("Your password has been updated successfully...");
    }

    function Fail(){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something's wrong!Please try again..",
          });
    }

    function UpdatePassword(){
        // console.log(token)
        if(password.current.mainpassword===password.current.confirmpassword){
            fetch("http://localhost:8000/user/user/updatepassword",{
                method:"PUT",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify({password:password.current.confirmpassword,token:token})
            })
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                if(data.success===true){
                    Success();
                    nav("/sign-in")
                }
                else{
                  Fail()
                }
            })
            .catch(function(err){
                console.log(err);
            })

        }
        else{

        }
    }

    let reset=useRef()

  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Reset Password</p>
        </div>

        <div class="relative max-w-md mx-auto mt-8 md:mt-16">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
                <div class="px-4 py-6 sm:px-8 sm:py-7">
                    <form ref={reset}>
                        <div class="space-y-5">
                            
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-base font-medium text-gray-900">New Password </label>

                                </div>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        onChange={function(e){
                                            ReadValue("mainpassword",e.target.value)
                                        }}
                                        type="password"
                                        placeholder="Enter your password"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-base font-medium text-gray-900">Confirm Password </label>

                                </div>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        type="password"
                                        onChange={function(e){
                                            ReadValue("confirmpassword",e.target.value)
                                        }}
                                        placeholder="Enter your password"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <button onClick={function(){
                                    UpdatePassword()
                                    reset.current.reset();
                                }} type="button" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Reset
                                </button>
                            </div>

                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
