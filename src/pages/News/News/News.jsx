import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "../EditorsInside/EditorsInside";


const News = () => {
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news;
    // console.log(news);

    return (
        <div className="mt-4">
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;