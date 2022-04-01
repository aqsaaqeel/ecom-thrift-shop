import "./pages-styles/landing-page.css";
import { VerticalCard } from "../Components/Card/Card";
import { useProduct } from "../service/product_api";


function WishlistPage() {
    const { data } = useProduct();
    return (
        <div className="main-container">
        <div className="container">
            <div className="content-area">
                <div className="content-heading" id="my-wishlist-heading">
                    <h1>My Wishlist</h1>
                    <p>(Showing 20 products)</p>
                </div>
                <div className="card-component-area">
                    { data && data.map(item => {
                        return(
                            <VerticalCard key = {item.id} name = {item.name} price = {item.price}/>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    );
}

export default WishlistPage