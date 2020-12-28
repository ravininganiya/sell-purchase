import React from 'react';
import { Link } from 'react-router-dom';
// import { logo } from '../assests/IconAsset';
import NavbarMenu from './Home/Navbar'
import {
    Container,
    Card,
    Navbar,
    Form,
    Button,

} from 'react-bootstrap'
function SignIn() {
    const handleEmailInput =()=>{

    }
    const handlePasswordInput =()=>{
        
    }
    const handleSubmit =()=>{
        
    }
    return (
        <>
            <div className="">
                {/* <div className=""> */}
                    <NavbarMenu />
                {/* </div> */}
                {/* <div className="row d-flex d-md-none text-center align-items-center">
                    <div className="col toggle_img_login_logo">
                        <Link to="/"><img className="img-fluid toggle_img_login_page" src={logo} /></Link>
                    </div>
                </div> */}
            </div>
            <Container className="col-md-8 my-md-5 my-0" >
                <Card className="mt-4 mt-md-0">
                    <Navbar expand="lg" className="justify-content-md-center signIn_form_brand">
                        <Navbar.Brand >
                            <h3 className="signIn_form_h3"><b className="signIn_form_h3_b">Log In</b></h3>
                        </Navbar.Brand>
                    </Navbar>
                </Card>
                <Container className="signIn_form_container mt-3">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Email</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailInput} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Password" onChange={handlePasswordInput} />
                        </Form.Group>
                        <Form.Group>
                            <p className="signIn_form_p">Don't have an account |
                                    <Link to="/sign-up"> Sign Up</Link>
                            </p>
                        </Form.Group>
                        <hr />
                        <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
                            <Button className="btn btn-danger btn-md" onClick={handleSubmit}><b>Submit</b></Button>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default SignIn

