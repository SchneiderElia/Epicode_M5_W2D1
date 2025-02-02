import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'


function SearcBar (props) {

    const[search, setSearch] = useState("")
    const handleInputChange = (event) => {
        setSearch(event.target.value) // Aggiorna lo stato con il valore dell'input
        props.onSearch(event.target.value)
      }
   
    return(
        <Form className="d-flex mb-3">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleInputChange}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
    )
}
export default SearcBar