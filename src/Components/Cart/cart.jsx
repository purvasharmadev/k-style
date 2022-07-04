
import { CartCard } from "../../Pages/CartCard";
import { CartPriceDetail } from "../../Pages/CartPriceCard";
import "../../Styles/cart.css";
import { useCart } from "../../Context/cart-context";

import emptycart from "../../Styles/Images/emptycart.svg"

function Cart() {
  const { productCart } = useCart();

  return (
    <>
      <h2 className="p-1 mt-top text-center mb-1">
        My Cart <span className="highlight-text">({productCart.length})</span>
      </h2>

      {productCart.length > 0 ? (
        <div className="flex flex-space-evenly p-1 h-100">
          <div className="p-1">
            {productCart &&
              productCart.map((item) => {
                return (
                  <CartCard
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    category={item.categoryName}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    discount={item.discount}
                    qty={item.qty}
                    item={item}
                  />
                );
              })}
          </div>

          {/* <!-- Product Price Details --> */}

          <div className="card cart-card p-1">
            <h2 className="order-head">Price Details</h2>
            <CartPriceDetail />
          </div>
        </div>
      ) : (
        <div className="flex flex-column flex-space-center align-item-center h-50 m-1">
          <img src={emptycart} alt="cart is empty" className="img-responsive mb-1" srcset="" />
          <h2 className="form-heading p-1">Cart is empty!!</h2>
        </div>
      )}
    </>
  );
}

export { Cart };
