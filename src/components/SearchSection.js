import { Row, Col, Button, Card } from "react-bootstrap";
import { CustomSelect, Input } from "./Input";
import WeatherInfo from "./WeatherInfo";
import countryList from "iso-3166-country-list";

const SearchSection = (props) => {
  const {cf, weather, city, onChange, onCountryChange, onSubmit, canSubmit } =
    props;

  return (
    <>
      <Row>
        <Col md="4">
          <Input
            name="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={onChange}
          />
        </Col>
        <Col md="4">
          <CustomSelect
            name="country"
            isClearable
            label="name"
            value="code"
            placeholder="Country"
            options={countryList}
            onChange={onCountryChange}
          />
        </Col>
        <Col md="4" xs="mb-2">
          <Button
            disabled={canSubmit}
            variant="success"
            onClick={() => onSubmit()}
          >
            Search
          </Button>
        </Col>
      </Row>
      {weather ? (
        <WeatherInfo cf={cf} info={weather} />
      ) : (
        <Card className="mt-3">
          <Card.Body>
            <p>Nothing found.</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default SearchSection;
