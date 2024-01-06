import { Button } from "../../components/Button";
import HeroImage from "../../assets/restauranfood.jpg";
import Bistro from "../../assets/bistro-storefront.jpeg";

export const Hero = () => {
  return (
    <header className="hero page-padding" id="hero">
      <article className="hero-content left">
        <div>
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
        </div>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button label="Reserve a Table" />
      </article>
      <img
        src={HeroImage}
        alt="A picture of a plate of bruschetta held by a chef"
      />
      <img src={Bistro} alt="A picture of the bistro's storefront" className="bistro-image"/>
    </header>
  );
};
