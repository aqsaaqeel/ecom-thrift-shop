// import "./App.css";
import LandingPage from "./Pages/landing-page.jsx";
import CartPage from "./Pages/product-page.jsx";
import ProductPage from "./Pages/cart-page.jsx";
import LoginPage from "./Pages/login-page.jsx"
import SignupPage from "./Pages/signup-page.jsx"
import WishlistPage from "./Pages/wishlist-page.jsx"
import { Route, Routes} from 'react-router-dom';
import { Navbar } from "./Components/Navbar/Navbar"
function App() {
    
    return (
        
        <div className="App">
            <Navbar />
                    <Routes>
                        <Route exact path ="/" element = {<LandingPage />} />
                        <Route exact path ="/cart" element = {<CartPage />} />
                        <Route exact path ="/product" element = {<ProductPage />} />
                        <Route exact path ="/login" element = {<LoginPage />}/>
                        <Route exact path ="/signup" element = {<SignupPage />}/>
                        <Route exact path ="/wishlist" element = {<WishlistPage />}/>
                    </Routes>
        </div>

    );
}
export default App;
