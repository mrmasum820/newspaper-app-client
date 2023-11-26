import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const EditorsInside = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0, 3));
                setNews(data.slice(0, 3))
            })
    }, [])

    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4 my-4">
                {
                    news.map(nw => {
                        return (
                            <Col key={nw._id}>
                                <Card>
                                    <Card.Img variant="top" src={nw.image_url} />
                                    <Card.Body>
                                        <Card.Title>{nw.title}</Card.Title>
                                        <Card.Text>
                                            {nw.details.length < 250 ? <>{nw.details}</> :
                                                <>{nw.details.slice(0, 250)}</>
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    );
};

export default EditorsInside;