import React from 'react'
import { useRef } from 'react';

export default function AdminSign() {

    let user=useRef({});

    function ReadValue(property,value){
        user.current[property]=value;

    }

    function register(){

        fetch("http://localhost:8000/admin/admin/register",{
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

        })
        .catch(function(err){
            console.log(err);
        })

    }

  return (
    <section class="bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 object-center">
        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign UP</h2>

                <form action="#" method="POST" class="mt-8">
                    <div class="space-y-5">
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
                            <div class="flex items-center justify-between">
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>

                                <a  title="" class="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Forgot password? </a>
                            </div>
                            <div class="mt-2.5">
                                <input
                                   onChange={function(event){
                                    ReadValue('password',event.target.value)
                                    }}
                                    type="password"
                                    required 
                                    placeholder="Enter your password"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <button onClick={function(){
                                register()
                            }} type="button" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Register</button>
                        </div>
                    </div>
                </form>

                <div class="mt-3 space-y-3">
                   

                    
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
