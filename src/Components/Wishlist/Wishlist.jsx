import { useWishlist } from "../../Context/WishlistContext";
import "./wishlist.css"
export function Wishlist() {
  const { state, dispatchWishlist } = useWishlist();
  return (
    <div className="cart-cards">
      {state.wishlistList.length !== 0 ? (
        state.wishlistList.map((item) => {
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
                        src={item.imagesrc}
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
                          dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: item });
                        }}
                      >
                        Remove from Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div class = "cart-empty">No Items in Wishlist{state.wishlistItems}</div>
      )}
    </div>
  );
}
