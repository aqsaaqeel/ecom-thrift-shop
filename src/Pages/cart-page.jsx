import "./pages-styles/cart-page.css";
import { useReducer } from "react";
import { useCart } from "../CartContext/CartContext";
import {Cart} from "../Components/Cart/Cart"

function CartPage() {
  const { state, dispatch } = useCart();
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="cart-content-area">
              <div className="content-heading" id="my-wishlist-heading">
                <h1>Cart Page</h1>
                <p>{state.cartItems}</p>
              </div>
              <div className="card-component-area">
                <Cart />
                <div className="comp" id="card-component">
                  <div className="photo-card-container">
                    <div className="basic-card-container"></div>

                    <div className="card-footer">
                      <div className="card-heading">Price Details</div>
                      <div className="card-subheading">Rs. 2000</div>
                      <div className="buttons">
                        <a className="button button-primary grey">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default CartPage;
