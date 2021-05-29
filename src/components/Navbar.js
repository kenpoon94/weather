import { Navbar, Container } from "react-bootstrap";

function CustomNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
