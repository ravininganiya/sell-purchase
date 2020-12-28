import React from 'react';
import {
    logo
} from '../assests/IconAsset';
import { Link } from 'react-router-dom';
// import Navbar from './Home/Navbar----old'
// import Footer from './Footer/index'

function Welcome(props) {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container-fluid d-flex justify-content-center my-4">
                <div className="modal-dailog">
                    <div className="col-sm-12 ">
                        <div className="modal-content">
                            <div className="col-md-12 mt-4 mb-4 d-flex justify-content-center">
                                <Link to="/" className="" >
                                    <img src={logo} alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <p><b>Buy and sell quickly in Whole India</b></p>
                            </div>
                            <div className="col-md-12 mb-2  d-flex justify-content-center " >
                                <div className="rounded-pill p-1 " style={{ backgroundColor: "#405BA7", color: "white" }}>
                                    <a className="d-inline-flex" style={{ color: "white", textDecoration: "none" }}>
                                        <span className="fab fa-facebook fa-1x m-2"></span>
                                        <p className="mb-0  d-flex align-items-center">Continue with Facebook</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2  d-flex justify-content-center " >
                                <div className="rounded-pill p-1 " style={{ backgroundColor: "#4181F6", color: "white" }}>
                                    <a className="d-inline-flex" href="#" style={{ color: "white", textDecoration: "none" }}>
                                        <span className="fab fa-google fa-1x m-2"></span>
                                        <p className="mb-0  d-flex align-items-center">Continue with Google</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <p className="d-flex justify-content-center">or continue with email</p>
                                <p className="d-flex justify-content-center">
                                    <Link to="/sign-in" className="" >Login</Link>
                                    <span>&nbsp; | &nbsp; </span>
                                    <Link to="/sign-up" className="" >Sign Up</Link>
                                </p>
                            </div>
                            <div className="col-md-9 mx-auto ">
                                <p className="">
                                    <small className="">By clicking on “Sign up”, you agree to our <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Welcome
