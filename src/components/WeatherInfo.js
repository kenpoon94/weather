import moment from "moment";
import { Card, ListGroup } from "react-bootstrap";

const WeatherInfo = (props) => {
  const { weather, name, sys, main, dt } = props.info;
  const { temp_min, temp_max, humidity } = main;
  const { description, main: main_weather } = weather[0];

  return (
    <Card className="mt-3">
      <Card.Header>{`${name}, ${sys.country}`}</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2>{main_weather}</h2>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {`${capitalizeFirstLetter(description)}`}
          </ListGroup.Item>
          <ListGroup.Item>{`${temp_min}F ~ ${temp_max}F`}</ListGroup.Item>
          <ListGroup.Item>{`Humidity: ${humidity}%`}</ListGroup.Item>
          <ListGroup.Item>
            {moment.unix(dt).format("DD-MM-YYYY HH:MM:SS a")}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default WeatherInfo;
