import "./pages-styles/landing-page.css";
import { Card, SmallCard } from "../Components/Card/Card.jsx";
import { Hero } from "../Components/Hero/Hero.jsx";
import { Heading } from "../Components/heading/Heading";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="main-container">
      <div className="landing-container">
        <Hero />

        <Heading name="Categories" />

        <div className="landing-card-component-area">
          <Link className="card-link" to="/cart">
            <Card collection="Trendy Collection" />
          </Link>

          <Link className="card-link" to="/cart">
            <Card collection="Vibrant Collection" />
          </Link>

          <Link className="card-link" to="/cart">
            <Card collection="Evergreen Collection" />
          </Link>
        </div>

        <Heading name="Categories" />

        <div className="category-container">
          <Link className="card-link" to="/cart">
            <SmallCard
              name="Men's Apparels"
              url={require("../assets/images/man-shirt.jpg")}
            />
          </Link>
          <Link className="card-link" to="/cart">
            <SmallCard
              name="Women's Apparels"
              url={require("../assets/images/women-shirt.jpg")}
            />
          </Link>
          <Link className="card-link" to="/cart">
            <SmallCard
              name="Kid's Apparels"
              url={require("../assets/images/kids-shirt.jpg")}
            />
          </Link>
          <Link className="card-link" to="/cart">
            <SmallCard
              name="Miscellaneous"
              url={require("../assets/images/misc-shirt.jpg")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
