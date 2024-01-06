export const Review = (props) => {
    return(
        <div className="reviewCard">
            <div className="reviewCard_heading">
            <img src={props.img} alt="Icon"></img>
            <h3>{props.name}</h3>
            </div>
            <div className="reviewCard_body">
            <p>{props.rating}</p>
            <p>{props.description}</p>
            </div>
        </div>

    )
}