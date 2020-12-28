import React from 'react'
import { Form } from 'react-bootstrap';
function Account() {
    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email *</b></Form.Label>
                    <Form.Control type="text" placeholder="Type your email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Password *</b></Form.Label>
                    <Form.Control type="text" placeholder="Type your password" />
                </Form.Group>
            </Form>
        </>
    )
}

export default Account
