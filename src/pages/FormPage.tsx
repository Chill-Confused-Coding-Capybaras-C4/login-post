import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imageSrc, { WebCapture } from '../components/WebCapture';
import Clock from 'react-live-clock';


export const FormPage = () => {

    const [name, setName] = useState('');


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        const req = {
            firstName: e.target.fName.value,
            lastName: e.target.lName.value,
            tcsid: e.target.tcsid.value,
            email: e.target.email.value,
            // image:  
        }

        const result = await axios.post("https://c4-back.azurewebsites.net/form", req, {
            headers: {'key': 'c4forever!'}
        });
        console.log(result);

        e.target.reset();
    }

    return (
        <div>
            {/* <div className='center'><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/></div> */}
            <Form onSubmit={handleOnSubmit} className='form'>
                <h2 className="title">Welcome to TCS, {name} </h2>

                <Form.Group className="mb-3" controlId="floatingInput">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='fName' onChange={handleOnChange} type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingInput ">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='lName' type="text" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingInput">
                    <Form.Label>TCS ID</Form.Label>
                    <Form.Control name='tcsid' type="number" placeholder="TCS ID Number" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">Submit</Button>
                </div>
            </Form >
            <div className='left'><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/></div>
        </div>

    );
}

