import { Form } from "react-bootstrap"

const SortOptionsComponent = () =>{
    return ( 
        <Form.Select area-label>
          <option>sort by</option>
          <option value="price_1">Price: Low to high</option>
          <option value="price_-1">Price: high to Low</option>
          <option value="rating-1">Customer rating</option>
          <option value="Name_1">Name A-Z</option>
          <option value="Name_-1">Name Z-a</option>
        </Form.Select>
    )
}
export default SortOptionsComponent