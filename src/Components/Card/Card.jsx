import { useProduct } from "../../service/product_api";
import "./Card.css";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useFilter } from "../../Context/FilterContext";
import { itemList, categoryList, ratingList} from "../../reducerFuncs/priceReducer";
import { catList } from "../../reducerFuncs/categoryreducer";

export function VerticalCard(props) {
  const { data } = useProduct();
  const { state, dispatch } = useCart();
  const { dispatchWishlist } = useWishlist();
  const { initialState} = useFilter();
  
  const { sortBy, categorizeByCategory, categorizeByRating} = initialState;

  const sortedData = sortBy !== "" ? itemList(sortBy, data) : data  
  
  const categoryData = categoryList(categorizeByCategory, data)

  const ratingData = ratingList(categorizeByRating, data)

  const catItemList = categorizeByCategory.length !== 0 ? categoryData : sortedData;

  const filteredItemList = categorizeByRating !== "" ? ratingData : catItemList

  return filteredItemList.map((item) => {
    return (
      <div className="comp" id="card-component">
        <div className="photo-card-container">
          <div className="basic-card-container">
            <div className="photo-area">
              <div className="photo-comp">
                <div className="photo-badge">
                  <i className="fa fa-heart"></i>
                </div>
                <img className="card-photo" src={item.imagesrc} alt="" />
              </div>
            </div>

            <div className="card-footer">
              <div className="card-heading">{item.name}</div>
              <div className="card-subheading">{item.price}</div>
              <div className="buttons">
                <button
                  className="button button-primary blue"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: item });
                  }}
                >
                  Add to cart
                </button>
                <br></br>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    dispatchWishlist({ type: "ADD_TO_WISHLIST", payload: item });
                  }}
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export function Card(props) {
  return (
    <div className="comp" id="card-component">
      <div className="photo-card-container horizontal">
        <div className="basic-card-container horizontal">
          <div className="photo-area horizontal">
            <div className="photo-comp">
              <div className="photo-badge horizontal">
                <i className="fa fa-heart"></i>
              </div>
              <img
                className="card-photo horizontal"
                src={require("./jacket.jpg")}
                alt="Green Jacket"
                loading="lazy"
              />
            </div>
          </div>

          <div className="card-footer horizontal">
            <div className="price">
              <div className="card-subheading">New Arrivals</div>
              <div className="small-space"></div>
            </div>
            <div className="small-space"></div>
            <div className="card-heading">{props.collection}</div>
            <div className="card-subheading detail">
              Get your favorite summer clothes at affordable prices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmallCard(props) {
  return (
    <div className="small-container">
      <img className="man-image" src={props.url} alt="Shirts" />
      <p className="man-text">{props.name}</p>
    </div>
  );
}
