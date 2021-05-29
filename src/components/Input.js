import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";

const Input = (props) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Col>
        <Form.Control {...props} />
      </Col>
    </Form.Group>
  );
};

const CustomSelect = (props) => {
  const {onChange, options, label, value, placeholder, isClearable, name } = props;
  return (
    <Form.Group as={Row} className="mb-3">
      <Col>
        <Select
          name={name}
          isClearable={isClearable}
          placeholder={placeholder}
          options={options}
          getOptionLabel={(option) => option[label]}
          getOptionValue={(option) => option[value]}
          onChange={onChange}
        />
      </Col>
    </Form.Group>
  );
};

export { CustomSelect, Input };
