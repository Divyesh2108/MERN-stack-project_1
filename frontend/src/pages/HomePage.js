// import ProductCarouselComponent from
import CatagoryCardComponent from "components/CatagoryCardComponent";
import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductCarouselComponent from "../components/ProductCarouselComponent";

const HomePage = () => {
    const categorys = [
        'books', 'mouse', 'laptop', 'tv', 'cable', 'bottle', 'headphone'
    ]
    return (
        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {categorys.map((categorys ,ind) => <CatagoryCardComponent key={ind} categorys={categorys} ind={ind}/>)}
                </Row>
            </Container>




        </>
    );
};

export default HomePage