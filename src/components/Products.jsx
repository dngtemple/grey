import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


export default function Products(props) {

  const navigate=useNavigate()
  // console.log(props.pro)

  const userID=JSON.parse(localStorage.getItem("grey_man"))?.userID;
  const token=JSON.parse(localStorage.getItem("grey_man"))?.token;



  const [disabledButtons, setDisabledButtons] = useState([]);



  let [cartData,setcartData]=useState([])
  

  function addToCart(product_id){

    fetch("http://localhost:8000/cart/cart_add",{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${token}`,
                "content-type":"application/json"
            },
            body:JSON.stringify({product:product_id,user:userID})
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data); 

            if(data.message==="Invalid token"){
              navigate("/sign-in")
            }
        })
        .catch(function(err){
            console.log(err);
        })
  }

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

  useEffect(() => {
    const disabledButtonsFromStorage = localStorage.getItem('disabledButtons');
    if (disabledButtonsFromStorage) {
      setDisabledButtons(JSON.parse(disabledButtonsFromStorage));
    }
    // Fetch cart data from the database to update button state
    getCartData();
  }, []);

  useEffect(() => {
    // Update disabled buttons state and localStorage after cartData changes
    setDisabledButtons(cartData.map(item => item.product._id));
    localStorage.setItem('disabledButtons', JSON.stringify(cartData.map(item => item.product._id)));
  }, [cartData]);


  const handleClick = (productId) => {
    if (disabledButtons.includes(productId)) {

      const updatedDisabledButtons = disabledButtons.filter((id) => id !== productId);
      setDisabledButtons(updatedDisabledButtons);
    } else {
      
      setDisabledButtons([...disabledButtons, productId]);
      // Update the cart data in the database
      addToCart(productId);

    }
  };




  return (
    <section className='products_section flex justify-center items-center flex-col'>

      <div class="max-w-3xl mx-auto text-center">
        <p class="text-l  leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Products</p>
      </div>

      <div className='products w-full'>

        {
          props && props.pro.map(function(pro,i){
            
            return(
              <div key={i} className='product'>

                <img src={pro.image}/>
        
                <div className='prod flex flex-col items-center'>
                  <h5 className='font-bold'>{pro.name}</h5>
      
                  <p>GHS-{pro.price}</p>


                  
                    <button
                      onClick={function(){
                        handleClick(pro._id);
                      }}
                      disabled={disabledButtons.includes(pro._id)}
                      >
                        {disabledButtons.includes(pro._id) ? 'Added' : 'Add'}
                      </button>
                  
      
                </div>
              </div>
            )
          })
        }
        

      </div>

 
    </section>
  )
}
