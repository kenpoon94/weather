import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Input from './Input';
import WeatherInfo from './WeatherInfo';

const SearchSection = props => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const onChange = e => {
        if (e.target.name === 'city')
            setCity(e.target.value)
        if (e.target.name === 'country')
            setCountry(e.target.value)
    }

    const onSubmit = () => {
        console.log("Submitting", {
            city, country
        })
    }

    return (
        <>
            <Row>
                <Col md="4">
                    <Input name="city" type="text" placeholder="City" onChange={onChange} value={city} />
                </Col>
                <Col md="4">
                    <Input name="country" type="text" placeholder="Country" onChange={onChange} value={country}/>
                </Col>
                <Col md="auto" xs="6" className="mb-2">
                    <Button variant="success" onClick={onSubmit}>Search</Button>
                </Col>
                <Col md="auto" xs="6" className="mb-2">
                    <Button variant="danger">Clear</Button>
                </Col>
            </Row>
            <WeatherInfo />
        </>
    )

}

export default SearchSection;