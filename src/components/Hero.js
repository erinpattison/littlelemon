import { Button } from "./Button"
import HeroImage from '../assets/restauranfood.jpg';
export const Hero = () => {
    return(
        <div className="hero" id="hero">
            <div className="left">
            <div>
            <h1 className="display-title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
            </div>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Button label="Reserve a Table"/>
            </div>
            <div className="right">
                <img src={HeroImage} alt="a picture of a plate of bruschetta held by a chef" />
            </div>
        </div>
    )
}