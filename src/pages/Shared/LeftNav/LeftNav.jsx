import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css'
import { Card, Col, Row } from "react-bootstrap";
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://green-dugong-cap.cyclic.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                    ><Link className="text-decoration-none text-dark" to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

            {/* hide for phone devices */}
            <Row xs={1} md={1} lg={1} className="d-none d-md-block g-4 my-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                Sports
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                Sports
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                Sports
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;