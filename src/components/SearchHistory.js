import { Card, ListGroup, Row, Button, Col } from "react-bootstrap";
import { BsSearch, BsTrash } from "react-icons/bs";
const { Responsive, IdResponsiveRenderOnlyIn } = require("responsive-react");

const SearchHistory = (props) => {
  return (
    <Card>
      <Card.Header>Search History</Card.Header>
      <Card.Body>
        <Responsive
          displayIn={[
            IdResponsiveRenderOnlyIn.Laptop,
            IdResponsiveRenderOnlyIn.Tablet,
          ]}
        >
          <LaptopView {...props} />
        </Responsive>
        <Responsive displayIn={IdResponsiveRenderOnlyIn.Mobile}>
          <MobileView {...props} />
        </Responsive>
        <ListGroup variant="flush"></ListGroup>
      </Card.Body>
    </Card>
  );
};

const MobileView = (props) => {
  const { search, remove } = props;
  return (
    <ListGroup variant="flush">
      {props.history.length > 0 ? (
        props.history.map((info, index) => {
          return (
            <ListGroup.Item>
              <Row>
                <Col>{`${info.city}, ${info.country}`}</Col>
              </Row>
              <Row>
                <Col>{info.timestamp}</Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Button variant="success" onClick={() => search(index)} block>
                    Search
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={() => remove(index)} block>
                    Delete
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroup.Item>No history</ListGroup.Item>
      )}
    </ListGroup>
  );
};

const LaptopView = (props) => {
  return (
    <ListGroup variant="flush">
      {props.history.length > 0 ? (
        props.history.map((info, index) => {
          return (
            <ListGroup.Item className="d-flex justify-content-between">
              {`${info.city}, ${info.country}`}
              <ItemActions {...props} info={info} index={index} />
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroup.Item>No history</ListGroup.Item>
      )}
    </ListGroup>
  );
};

const ItemActions = (props) => {
  const { index, remove, search, info } = props;
  return (
    <Row>
      <Col md="auto">{info.timestamp}</Col>
      <Col>
        <Button onClick={() => search(index)} variant="success">
          <BsSearch className="ml-2 mr-2" />
        </Button>
      </Col>
      <Col>
        <Button onClick={() => remove(index)} variant="danger">
          <BsTrash className="ml-2 mr-2" />
        </Button>
      </Col>
    </Row>
  );
};

export default SearchHistory;
