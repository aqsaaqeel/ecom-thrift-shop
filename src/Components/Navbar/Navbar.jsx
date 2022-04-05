import "./Navbar.css";
import { Link } from "react-router-dom"
import { useCart } from "../../CartContext/CartContext"

export function Navbar() {
    const {state} = useCart();
    return (
        <div className="nav-container">
            <Link to="/" className="logo-link">
                <div className="logo">Thrifters Stop</div>
            </Link>
            <div className="serch-bar">
                <input className="nav-input" type="text" placeholder="Search" />
            </div>
            <div className="menu-items">
                <ul className="menu-items">
                    <li className="list-item"><Link className="menu-link" to="/login">Login</Link></li>
                    <li className="list-item"><Link className="menu-link" to="/wishlist"><i
                        className="fa fa-heart">Wishlist</i></Link></li>
                    <div className="list-item-badge">
                        <li className="list-item"><Link className="menu-link" to="/product">Cart</Link></li>
                        {state.cartItems !== 0 ?
                        <p class = "badge-item">{state.cartItems}</p> : <p></p>}
                    </div>
                </ul>
            </div>
        </div>
    )
}
