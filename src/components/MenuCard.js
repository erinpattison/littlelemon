import { Button } from "./Button"

export const MenuCard = (props) => {
    return(
        <div className="menuCard">
            <div clasName="menuCard_image">
           <img src={props.img} alt="Special Menu"></img>
           </div>
            <section className="menuCard-content">
                <header>
                <h1 className="card-title">{props.name}</h1>
                <h3 className="card-title price">{props.price}</h3>
                </header>
                <p>{props.desc}</p>
                <Button label="Order for Delivery"/>
            </section>
        </div>
    )
}