import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assests/IconAsset';
import NavbarMenu from './Home/Navbar'
import {
    Container,
    Card,
    Navbar,
    Form,
    Button,

} from 'react-bootstrap'
function SignUp() {
    const [name, setName] = useState(['']);
    const [email,setEmail] = useState(['']);
    const [number,setNumber] = useState(['']);

    const handleSignUp = (e) => {
        e.preventDefault();
        alert("form submit:"+`\n`+[name]+`\n`+[email]+`\n`+[number])
        // alert("form submit:"+[email])
        // alert("form submit:"+[number])
    }
    return (
        <>
            <div className="">
                <NavbarMenu />
                <div className="row d-flex d-md-none text-center align-items-center">
                    <div className="col toggle_img_login_logo">
                        <Link to="/"><img className="img-fluid toggle_img_login_page" alt="logo" src={logo} /></Link>
                    </div>
                </div>
            </div>
            <Container className="col-md-8 my-md-5 my-2" >
                <Card>
                    <Navbar expand="lg" variant="light" className="justify-content-md-center signUp_form_brand">
                        <Navbar.Brand >
                            <h3 className="signup_form_h3"><b className="signUp_form_h3_b">Sign Up</b></h3>
                        </Navbar.Brand>
                    </Navbar>
                    <Container className="signUp_form_container mt-3">
                        <Form onSubmit={handleSignUp}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><b>Name</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => {setName(e.target.value)
                                        localStorage.setItem('name', JSON.stringify(e.target.value));
                                            }}
                                    value={
                                        JSON.parse(localStorage.getItem('name'))
                                    }
                                    placeholder="enter your name" 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><b>Email</b></Form.Label>
                                <Form.Control 
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} 
                                    placeholder="enter email" 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><b>Mobile</b></Form.Label>
                                <Form.Control 
                                    type="number" 
                                    onChange={e => setNumber(e.target.value)} 
                                    value={number} 
                                    placeholder="enter mobile no" 
                                />
                            </Form.Group>
                            <Form.Group>
                                <p className="signup_form_p">Have an account |
                                    <Link to="/sign-in" > Login</Link>
                                </p>
                            </Form.Group>
                            <hr />
                            <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
                                <Button className="btn btn-danger btn-md" type='submit'><b>Submit</b></Button>
                            </Form.Group>
                        </Form>
                    </Container>
                </Card>
            </Container>
            

        </>
    )
}

export default SignUp