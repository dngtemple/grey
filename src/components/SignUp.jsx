import React from 'react'
import { Link } from 'react-router-dom'

import image from "../assets/image.jpg"
import { useRef ,} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigate=useNavigate()

    let formreset=useRef()


    let user=useRef({});

    function ReadValue(property,value){
        user.current[property]=value;
    }

    function Success(){
        Swal.fire("Signup was successfull");
    }

    function Fail(){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something's wrong!.Please input valid info",
          });
    }


    function signup(){

        fetch("http://localhost:8000/user/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user.current)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            if(data.success===true){
               Success()
               navigate("/sign-in")
            }
            else{
                Fail()
            }

        })
        .catch(function(err){
            console.log(err);
        })

    }

   


  return (
    <section class="bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                <p class="mt-2 text-base text-gray-600">Already have an account? <Link to={"/sign-in"}><a title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">sign into your account</a></Link></p>

                <form ref={formreset}  class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label  class="text-base font-medium text-gray-900"> Full name </label>
                            <div class="mt-2.5">
                                <input
                                    onChange={function(event){
                                        ReadValue('name',event.target.value)
                                    }}
                                    type="text"
                                    name=""
                                    
                                    placeholder="Enter full name"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5">
                                <input
                                    onChange={function(event){
                                        ReadValue('email',event.target.value)
                                    }}
                                    type="email"
                                    name=""
                                    
                                    placeholder="Enter email to get started"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label class="text-base font-medium text-gray-900"> Phone number </label>
                            <div class="mt-2.5">
                                <input
                                    onChange={function(event){
                                        ReadValue('contact',event.target.value)
                                    }}
                                    type="number"
                                    name=""
                                    
                                    placeholder="Enter contact number"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label  class="text-base font-medium text-gray-900"> Password </label>

                                <a   class="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Forgot password? </a>
                            </div>
                            <div class="mt-2.5">
                                <input
                                    onChange={function(event){
                                        ReadValue('password',event.target.value)
                                    }}
                                    type="password"
                                    name=""
                                    
                                    placeholder="Enter your password"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <button onClick={function(){
                                formreset.current.reset();
                                signup();
                            }} type='button' class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Sign up</button>
                        </div>
                    </div>
                </form>

                <div class="mt-3 space-y-3">
                   

                    
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
                <img class="w-4/5 mx-auto" src={image} alt="" />

            </div>
        </div>
    </div>
</section>

  )
}
