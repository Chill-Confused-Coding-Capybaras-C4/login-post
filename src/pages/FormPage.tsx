import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormPage = () => {

    const [name, setName] = useState('');


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    return (
        <div>

            <Form className='form'>

                <h2 className="title">Welcome to TCS, {name} </h2>
          
                <Form.Group className="mb-3" controlId="floatingInput">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handleOnChange} type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingInput ">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingInput">
                    <Form.Label>TCS ID</Form.Label>
                    <Form.Control type="number" placeholder="TCS ID Number" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">Submit</Button>
                </div>
            </Form>

        </div>

    );
}

