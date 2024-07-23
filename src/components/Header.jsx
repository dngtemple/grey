import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const nav=useNavigate()

    let [signout,setsignout]=useState(false);
    let [signout2,setsignout2]=useState(false);


  const token=JSON.parse(localStorage.getItem("grey_man"))?.token;
  const name=JSON.parse(localStorage.getItem("grey_man"))?.name;


  return (
    <header class="bg-black border-b border-gray-400">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <nav class="flex items-center justify-between h-13 lg:h-20">
            <div class="flex-shrink-0">
                <a  title="" class="flex">
                    <img class="w-auto h-8 lg:h-10 logo" src={logo} alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div class="hidden md:flex md:items-center md:space-x-10">
                <a  onClick={function(){
                    window.scroll(0,1200);
                }}  class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Products </a>

                <a onClick={function(){
                    window.scroll(0,2300);
                }}  class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> About Us</a>

                <Link className='md:flex' to={"/checkout"}> <a class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Cart </a><div className='text-black h-3 w-3 cart' >{props?.cart?.length}</div></Link>

                {
                    token === null || token === undefined?(
                        <Link to={"/sign-in"}><a  class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"><i className='fa-solid fa-user text-sm text-white'></i> Sign in </a></Link>
                    ):
                    <a  class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70" onClick={function(){
                        if(signout===false){
                            setsignout(true)
                        }
                        else{
                            setsignout(false)
                        }
                    }}><i className='fa-solid fa-user text-sm text-white'></i>{name} </a>



                }
            </div>

            
        </nav>


        {
            signout===true?(
                <div onClick={function(){
                    localStorage.removeItem("grey_man");
                    nav("/sign-in")
                    
                }} className='w-28 h-10 bg-black text-white absolute right-0 flex items-center justify-center'>
               <i class="fa-solid fa-right-from-bracket"></i><p>Sign out</p>
       
               </div>

            ):null
        }

        

        
        <nav class="min-h-screen px-4 py-10 text-center bg-black md:hidden">
            <button type="button" class="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <nav class="flex flex-col items-center mt-10 space-y-2">
                <a  onClick={function(){
                    window.scroll(0,3000);
                }}  class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">Products </a>

                <a  onClick={function(){
                    window.scroll(0,5500)
                }} class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">About Us </a>

                <Link to={"/checkout"}><a  class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Cart <div className='text-black h-3 w-3 cart' >{props?.cart?.length}</div> </a></Link>
                {
                    token === null || token === undefined?(
                    <Link to={"/sign-in"}><a  class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"><i className='fa-solid fa-user text-sm text-white'></i> Sign in </a></Link>

                    ):
                    <a onClick={function(){
                        if(signout2===false){
                            setsignout2(true)
                        }
                        else{
                            setsignout2(false)
                        }

                    }} class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"><i className='fa-solid fa-user text-sm text-white'></i> {name} </a>


                }

            </nav>


            {
                signout2===true?(
                    <div onClick={function(){
                        localStorage.removeItem("grey_man");
                        nav("/sign-in")
                        
                    }} className='w-28 h-10 bg-white text-black absolute  right-20 rounded-md flex items-center justify-center'>
                   <i class="fa-solid fa-right-from-bracket"></i><p>Sign out</p>
           
                   </div>

                ):null
            }

            
        </nav>
    </div>
</header>

  )
}
