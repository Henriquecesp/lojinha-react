import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class InputGroupComponent extends Component {
    render() {
        return (
            <InputGroup className='mb-3'>
            <FormControl
              placeholder='Seu email'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
            <InputGroup.Append>
              <Button variant='success'><span className="text-white px-4"><FontAwesomeIcon icon={faArrowRight} /></span></Button>
            </InputGroup.Append>
          </InputGroup>
        )
    }
}
