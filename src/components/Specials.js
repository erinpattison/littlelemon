import { Button } from "./Button";
import { MenuCard } from "./MenuCard";
import bruschetta from '../assets/bruchetta.svg';
import greeksalad from '../assets/greeksalad.jpg';
import lemondessert from '../assets/lemondessert.jpg';
export const Specials = (props) => {
    return(
        <section className="specials">
            <header>
            <h1 className="sub-title">This week's specials!</h1>
            <Button label="Online Menu" className="homepageButton"/>
            </header>
            <div class="specialItems">
            <MenuCard img={bruschetta} name="Bruschetta" price="$5.99" desc="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
            <MenuCard img={greeksalad} name="Greek Salad" price="$12.99" desc="The famous greek salad of crispy lettuce, peppers, olives, and out Chicago style feta cheese, garnished with crunchy galric and rosemary croutons."/>
            <MenuCard img={lemondessert} name="Lemon Dessert" price="$5.00" desc="This comes straight from grandma's recipe book. Every last ingredient has been sources and is as authenic as can be imagined." />
            </div>
        </section>
    );
}