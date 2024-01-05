export const MenuCard = (props) => {
    return(
        <div className="menuCard">
           <img src={props.img} alt="Special Menu"></img>
            <section className="menuCard-content">
                <header>
                <h1 className="card-title">{props.name}</h1>
                <h3 className="card-title price">{props.price}</h3>
                </header>
                <p>{props.desc}</p>
                <button>Order for Delivery</button>
            </section>
        </div>
    )
}