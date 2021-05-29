import moment from 'moment';
import { useState } from 'react'
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaCloud } from 'react-icons/fa'

const WeatherInfo = () => {

    const [weatherInfo, setInfo] = useState({
        description: 'Scattered Clouds',
        maxtemp: '303.15F',
        lowtemp: '306.15F',
        humidity: '58%',
        time: moment().format('YYYY-MM-DD HH:MM a')
    })


    return (
        <Card>
            <Card.Header>
                Johor, MY
                </Card.Header>
            <Card.Body>
                <Card.Title >
                    <Row>
                        <h2>Clouds</h2>
                    </Row>
                </Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>{`Description: ${weatherInfo.description}`}<FaCloud /></ListGroup.Item>
                    <ListGroup.Item>{`Temperature: ${weatherInfo.lowtemp} ~ ${weatherInfo.maxtemp}`}</ListGroup.Item>
                    <ListGroup.Item>{`Humidity: ${weatherInfo.humidity}`}</ListGroup.Item>
                    <ListGroup.Item>{`Time: ${weatherInfo.time}`}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WeatherInfo;