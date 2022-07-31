// UserOrder
function UserOrder() {
    const order = localStorage.getItem("order");
    const price = JSON.parse(localStorage.getItem("price"));
  
    return (
      <div>
          <div className="w-100 m-1 p-1">
              <div>
              {
                  order.items.map((item)=>{
                      return(
                          <div className="flex w-50 flex-space-between">
                          <h2>{item.title}</h2>
                          <h2>{item.qty}</h2>
                          </div>

                      )
                  })
              }


              </div>
              <div className="flex flex-space-between">
              <h2>{order.mode}</h2>
              <h2>Rs. {price}</h2>
              </div>
          </div>
          {/* <div>
              <h2>{order.address.address}</h2>
              <h2>{order.address.fullName}</h2>
              <h2>{order.address.pNo}</h2>

          </div> */}

      </div>
    );
  }
  
  export { UserOrder };