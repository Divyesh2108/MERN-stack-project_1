import { Button, Card, Col, Row } from "react-bootstrap"
import { Rating } from 'react-simple-star-rating'
import { LinkContainer } from "react-router-bootstrap"
const ProductForListComponent = ({ images, ind }) => {
    return (
        <>
            <Card style={{ marginTop: '30px', marginBottom: '50px' }}>
                <Row>
                    <Col lg={5}>
                        <Card.Img crossOrigin="anonymous" variant="top" src={`images/games-category.png`} />

                    </Col>

                    <Col lg={7}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Text>
                                <Rating readonly initialValue={5} size={20} />(1)
                            </Card.Text>
                            <Card.Text className="h4">
                                $125
                            </Card.Text>
                            <LinkContainer to="/product-details">
                                <Button variant="danger">See product</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Col>
                </Row>

            </Card>
        </>
    )
}
export default ProductForListComponent