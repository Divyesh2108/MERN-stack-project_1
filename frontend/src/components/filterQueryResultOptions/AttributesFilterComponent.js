import { Form } from "react-bootstrap"

const AttributesFilterComponent = () => {
    return (
        <div>
            {
                [{ color: ['red', 'green', 'blue'] }, { ram: ["1gb", '2gb', '3gb'] }].map((ele, ind) => (
                    <div>
                        <Form.Label>
                            <b>{Object.keys(ele)}</b>
                        </Form.Label>
                        {
                            ele[Object.keys(ele)].map((ele, id) => {
                                return (
                                    <Form.Check
                                        key={id}
                                        type='checkbox'
                                        label={ele}
                                    />
                                )
                            })
                        }
                    </div>

                ))}



        </div>
    )
}
export default AttributesFilterComponent