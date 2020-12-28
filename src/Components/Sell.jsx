import React, { useState } from 'react'
import NavbarMenu from './Home/Navbar';
import { Container, Navbar, Form, Col, Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logo } from '../assests/IconAsset';


function Sell() {
    const [screenType, setScreenType] = useState({ screen: "false" })
    const handleNotAccount = () => {
        setScreenType("true")
    }
    const handleAccount = () => {
        setScreenType("false")
    }
    return (
        <>
            <div className="container">
                <div className="">
                    <NavbarMenu />
                </div>
                <div className="row d-flex d-md-none text-center align-items-center">
                    <div className="col toggle_img_login_logo">
                        <Link to="/"><img className="img-fluid toggle_img_login_page " src={logo} /></Link>
                    </div>
                </div>
            </div>

            <Container className="col-md-8 mt-4 mb-4" >
                <Card>
                    <Navbar expand="lg" className="justify-content-md-center sell_form_brand">
                        <Navbar.Brand >
                            <h3 className="sell_form_h3"><b className="sell_form_h3_b">Sell your products</b></h3>
                        </Navbar.Brand>
                    </Navbar>
                    <Container className="sell_form_container mt-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><b>Ad Title*</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    70 Characters left
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label><b>Category *</b></Form.Label>
                                <Form.Control as="select" defaultValue="Choose Category...">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                    <option>Category 5</option>
                                </Form.Control>
                            </Form.Group>
                            <hr />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><b>Ad Description *</b></Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Include the brand, model, age and any included accessoires." />
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><b>Price *</b></Form.Label>
                                        <Form.Control type="price" placeholder="Price" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><b>Currency *</b></Form.Label>
                                        <Form.Control as="select" custom>
                                            <option>USD</option>
                                            <option>RS</option>
                                            <option>EURO</option>
                                        </Form.Control>

                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Upload Photo" />
                            </Form.Group>
                        </Form>
                        <hr />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Name *</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Contact Number *</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label><b>City *</b></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Enter a locality</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <p><small>By clicking 'Submit' you agree to our <a href="#">Terms of use </a>& <a href="#">Posting Rules</a></small></p>
                        <Form.Group>
                            <Row>
                                <Col md={6}>
                                    <input className="form-group" type="radio" name="radioAccount" onChange={handleNotAccount} />
                                    <Form.Label><b>&nbsp; Don't have account</b></Form.Label>
                                </Col>
                                <Col md={6}>
                                    <input className="form-group" type="radio" onChange={handleAccount} name="radioAccount" />
                                    <Form.Label><b>&nbsp; Already have an account</b></Form.Label>
                                </Col>
                            </Row>
                        </Form.Group>
                        {screenType === "true" ? (
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
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label><b>Repeat Password *</b></Form.Label>
                                        <Form.Control type="text" placeholder="Re-Type your password" />
                                    </Form.Group>
                                </Form>
                            </>
                        ) : (
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
                        <hr />
                        <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
                            <Button className="btn btn-info active btn-lg btn-md sell_form_submit_button"><b>Submit</b></Button>
                        </Form.Group>
                    </Container>
                </Card>
            </Container>

        </>
    )
}

export default Sell;
