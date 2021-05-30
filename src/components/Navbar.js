import {ToggleButton, ToggleButtonGroup, Col, Navbar, Container } from "react-bootstrap";

function CustomNavbar(props) {
  const { title, cf, toggleCf } = props;
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <div>
          <Col>
            <ToggleButtonGroup type="checkbox" value={cf} onChange={toggleCf}>
              <ToggleButton value="c">C</ToggleButton>
              <ToggleButton value="f">F</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
