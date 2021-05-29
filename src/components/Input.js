import { Row, Col, Form } from 'react-bootstrap';

const Input = props => {
    const { placeholder, type, value, name, onChange } = props;
    return (
        <Form.Group as={Row} className="mb-3">
            <Col>
                <Form.Control name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} />
            </Col>
        </Form.Group>
    );
}

export default Input;