import { LinkContainer } from "react-router-bootstrap";

const { Card, Button } = require("react-bootstrap")

const CatagoryCardComponent = ({ categorys, ind }) => {
    const images = [
        '/images/tablets-category.png',
        '/images/monitors-category.png',
        '/images/games-category.png',
        '/images/games-category.png',
        '/images/games-category.png',
        '/images/games-category.png',
        '/images/games-category.png',
    ]
    return (
        <Card>
            <Card.Img crossOrigin="anonymous" variant="top" src={images[ind]} />
            <Card.Body>
                <Card.Title>{categorys}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to='/product-list'>
                    <Button variant="primary">Go to catagory</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}
export default CatagoryCardComponent;