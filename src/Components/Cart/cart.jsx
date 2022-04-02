import { Footer } from "../../Pages/Footer";
import { Nav } from "../../Pages/Nav";
import { CartCard } from "../../Pages/CartCard";
import { CartPriceDetail } from "../../Pages/CartPriceCard";
import "../../Styles/cart.css";
import { useCart } from "../../Context/cart-context";

function Cart() {
  const { productCart } = useCart();

  return (
    <>
      <Nav />
      <h2 className="p-1 mt-top text-center">
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
        <div className="input-container">
          <h2 className="form-heading p-1">Cart is empty!!</h2>
        </div>
      )}

      <Footer />
    </>
  );
}

export { Cart };
