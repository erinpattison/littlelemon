import { Review } from "../../components/Review"
import review1 from '../../assets/people/lady1.png';
import review2 from '../../assets/people/man2.png';
import review3 from '../../assets/people/lady2.png';
export const Testimonials = () => {
    return(
        <section className="testimonials page-padding">
        <h2 className="sub-title">What people say about us!</h2>
        <div className="specialItems">
            <Review img={review1} name={"Katherine L."} rating={"★★★★★"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt deleniti quod nulla sunt?"} />
            <Review img={review2} name={"Leo B."} rating={"★★★★☆"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt deleniti quod nulla sunt?"} />
            <Review img={review3} name={"Wanda R."} rating={"★★★★★"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt deleniti quod nulla sunt?"} />
        </div>
        </section>
    )
}