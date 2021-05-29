import moment from 'moment';
import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BsSearch, BsTrash } from 'react-icons/bs';




const SearchHistory = () => {
    const [items, setItems] = useState(["Johor, MY", "Osaka, JP", "Seoul, KR"]);
    return (

        <Card>
            <Card.Header>
                Search History
                </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {items.map((location, index) => { return (<Item key={index} location={location} />) })}
                </ListGroup>
            </Card.Body>
        </Card>
    )

}

const Item = (props) => {
    const { location } = props;
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">{location}<ItemActions /></ListGroup.Item>
    )

}

const ItemActions = (props) => {
    return (
        <div>
            {moment().format("HH:MM:SS a")}
            <span>
                <BsSearch className="ml-2 mr-2" />
            </span>
            <span>
                <BsTrash className="ml-2 mr-2" />
            </span>
        </div>
    )

}

export default SearchHistory;