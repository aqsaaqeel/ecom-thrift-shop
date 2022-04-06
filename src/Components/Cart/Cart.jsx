import { useCart } from "../../Context/CartContext";

export function Cart() {
  const { state, dispatch } = useCart();
  return (
    <div className="cart-cards">
      {state.cartlist.length !== 0 ? (
        state.cartlist.map((item) => {
          return (
            <div className="comp" id="card-component">
              <div className="photo-card-container">
                <div className="basic-card-container">
                  <div className="photo-area">
                    <div className="photo-comp">
                      <div className="photo-badge">
                        <i className="fa fa-heart"></i>
                      </div>
                      <img
                        className="card-photo"
                        src={require("./jacket.jpg")}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="card-heading">{item.name}</div>
                    <div className="card-subheading">{item.price}</div>
                    <div className="buttons">
                      <a
                        className="button button-primary blue"
                        onClick={() => {
                          dispatch({ type: "REMOVE_FROM_CART", payload: item });
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div class = "cart-empty">No Items in Cart{state.cartItems}</div>
      )}
    </div>
  );
}
