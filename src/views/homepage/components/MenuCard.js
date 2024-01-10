import { Button } from "../../../components/Button"

export const MenuCard = (props) => {
    return(
        <article className="menuCard">

            <div className="menuCard_image">
           <img src={props.img} alt="Special Menu"></img>
           </div>
            
            <section className="menuCard_content">
                <header>
                <h1 className="menuCard_title">{props.name}</h1>
                <h3 className="menuCard_title price">{props.price}</h3>
                </header>

                <p className="menuCard_desc">{props.desc}</p>

                <Button label="Order for Delivery"/>
            </section>

        </article>
    )
}