import React,{useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {getDataFromLocal} from "../Hooks/useLocalStorage";



function OrderSummary() {
    const location = useLocation()
    let orderState = location.state
    let address = getDataFromLocal("address",[{
      fullName: "Jane Doe",
      pNo: "092635100",
      address: "Myungong street, block 3, Busan, South Korea",
    }])

    useEffect(()=>{
      localStorage.setItem("order", JSON.stringify(orderState));
    },[orderState])
    


  return (
  <>
  <div className='m-top text-center h-90 p-1'>
  <h1>Order Summary</h1>
  <div className='container m-1'>
  <span className='flex flex-space-between p-1 m-1'>
    <h4>order_id : {orderState.orderId}</h4>
    <h4>Payment_Id: {orderState.paymentId}</h4>
  </span>
  <div className='text-left p-1 border'>
      {
        orderState.products.map((item)=>{
          return(
            <>
            <div key={item.title} className='flex'>
              <img className='p-1' src={item.img} height="150px" width="150px"/>
              <div className= 'orderSum p-1'>
              <h3>Product Name : {item.title}</h3>
              <h4>Qty: {item.qty}</h4>
              <h4>Price: Rs. {item.price}</h4>
              </div>
            </div> 
            </>

          )
        })
      }
      <h3 className='p-1'>Address : {address[0].fullName}, {address[0].pNo}, {address[0].address}</h3>
    <h3 className='text-right'>Total Amount: Rs. {Number(orderState.amount)/100}</h3>
    </div>
  </div>






  </div>
  </>
  )
}

export  {OrderSummary};