import { Card, ListGroup } from "react-bootstrap";
import { BsSearch, BsTrash } from "react-icons/bs";

const SearchHistory = (props) => {
  return (
    <Card>
      <Card.Header>Search History</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {props.history.length > 0 ? (
            props.history.map((info, index) => {
              return <Item key={index} index={index} info={info} {...props} />;
            })
          ) : (
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              No history
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const Item = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {`${props.info.city}, ${props.info.country}`}
      <ItemActions {...props} />
    </ListGroup.Item>
  );
};

const ItemActions = (props) => {
  const { index, remove, search, info } = props;
  return (
    <div>
      {info.timestamp}
      <span>
        <BsSearch onClick={() => search(index)} className="ml-2 mr-2" />
      </span>
      <span>
        <BsTrash onClick={() => remove(index)} className="ml-2 mr-2" />
      </span>
    </div>
  );
};

export default SearchHistory;
