import "./pages-styles/landing-page.css";
import { VerticalCard } from "../Components/Card/Card";

function WishlistPage() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content-area">
          <div className="content-heading" id="my-wishlist-heading">
            <h1>My Wishlist</h1>
            <p>(Showing 20 products)</p>
          </div>
          <div className="card-component-area">
            <VerticalCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
