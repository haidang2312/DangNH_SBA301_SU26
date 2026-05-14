import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProfile from "./components/MyProfile";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import MyCarousel from "./components/Carousel";
import { students } from "./data/students";



function App() {
  return (
    <Container className="py-4">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Single Page Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MyCarousel />
      <Row className="g-4">
        {students.map((student) => (
          <Col key={student.id} lg={3} md={6} sm={12}>
            <MyProfile student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
