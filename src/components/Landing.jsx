import React, { useEffect ,useState} from 'react'

import Header from "./Header";
import Gallery from './Gallery'
import Products from './Products'
import Works from './Works'
import Footer from './Footer'
import Banner from './Banner';
import { generatePath } from 'react-router-dom';


export default function Landing() {

  let [products,setproducts]=useState([])
  const userID=JSON.parse(localStorage.getItem("grey_man"))?.userID;
 
 let [cartData,setcartData]=useState()

  useEffect(function(){
    fetch("http://localhost:8000/product/get_all_products",{
      method:"GET"
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data)
      setproducts(data.products);
    })
    .catch(function(err){
      console.log(err);
    })

    getCartData()
    
  },[])

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
          setcartData(data.data) 
        }
 
    })
    .catch(function(err){
        console.log(err);
    })
  }

  // console.log(products)

  return (
    <>
    <Header cart={cartData}/>

    <Banner/>

    <Gallery/>
    
    <Products pro={products} />
    
    <Works/>
    
    <Footer/>
    </>
  )
}
