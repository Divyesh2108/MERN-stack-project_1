import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import { useEffect } from "react";
import SortOptionsComponent from "components/SortOptionsComponent";
import PriceFilterComponent from "components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "components/filterQueryResultOptions/AttributesFilterComponent";
import ProductForListComponent from "components/ProductForListComponent";
import PaginationComponents from "components/PaginationComponents";


const ProductListPageComponent = ({getProducts}) => {

    useEffect(() => {
        getProducts().then(products => console.log("========",products))
    }, [])

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>{" "}
              <Button variant="danger">Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={["games", "monitors", "tablets", "games", "monitors"]}
              idx={idx}
            />
          ))}
          <PaginationComponents />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPageComponent;

