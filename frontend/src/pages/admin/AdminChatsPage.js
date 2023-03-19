import AdminChatRoomComponent from "components/admin/AdminChatRoomComponent"
import AdminLinksComponent from "components/admin/AdminLinksComponents"
import { Col, Row } from "react-bootstrap"

const AdminChatsPage = () =>{
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent/>
            </Col>
            <Col md={10}>
                <AdminChatRoomComponent/>
            </Col>
        </Row>
    )
 }
 
 export default AdminChatsPage