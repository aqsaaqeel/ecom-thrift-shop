import "./pages-styles/landing-page.css";
// import { VerticalCard } from "../Components/Card/Card";
import { Wishlist } from "../Components/Wishlist/Wishlist"

function WishlistPage() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content-area">
          <div className="content-heading" id="my-wishlist-heading">
            <h1>My Wishlist</h1>
          </div>
          <div className="card-component-area">
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
