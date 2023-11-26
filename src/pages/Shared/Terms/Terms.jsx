import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Terms = () => {
    return (
        <Container>
            <h2>Our tems and conditons</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus rerum quidem culpa necessitatibus reprehenderit odit commodi doloremque? Praesentium adipisci nesciunt a architecto perferendis. Cupiditate magnam reiciendis officia libero repellat quidem inventore sunt odio ex voluptatem corrupti praesentium necessitatibus dolor vero in, sint architecto distinctio, minus quod eos accusamus rerum?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;