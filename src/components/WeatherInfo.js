import moment from "moment";
import { Card, ListGroup } from "react-bootstrap";

const WeatherInfo = (props) => {
  const { weather, name, sys, main, dt } = props.info;
  const { temp_min, temp_max, humidity } = main;
  const { description, main: main_weather } = weather[0];
  let temperature = ``;
  if (props.cf === "c") {
    temperature = `${convertToCelsius(temp_min)}C ~ ${convertToCelsius(
      temp_max
    )}C`;
  }

  if (props.cf === "f") {
    temperature = `${convertToFarenheit(temp_min)}F ~ ${convertToFarenheit(
      temp_max
    )}F`;
  }

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
          <ListGroup.Item>{temperature}</ListGroup.Item>
          <ListGroup.Item>{`Humidity: ${humidity}%`}</ListGroup.Item>
          <ListGroup.Item>
            {moment.unix(dt).format("DD-MM-YYYY HH:MM:SS a")}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

function convertToCelsius(temp) {
  return (temp - 273.15).toFixed(2);
}

function convertToFarenheit(temp) {
  return (temp * (9 / 5) - 459.67).toFixed(2);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default WeatherInfo;
