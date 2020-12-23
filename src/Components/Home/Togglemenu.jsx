import React from 'react';
import { Link } from 'react-router-dom'

function ToggleMenu(props) {
    return (
        <>
            <div className="container mt-5 mb-5 toggleMenu_items ">
                <div className="row align-items-center ">
                    <div className="col-2 toggleMenu_item_icon">
                        <i className="fa fa-camera"></i>
                    </div>
                    <div className="col-10">
                        <p className="m-0 toggleMenu_item_text"><Link to="/sell">Start Selling</Link></p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2 toggleMenu_item_icon">
                        <i className="fa fa-copy"></i>
                    </div>
                    <div className="col-10">
                        <p className="m-0 toggleMenu_item_text">My Ads</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2 toggleMenu_item_icon">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="col-10">
                        <p className="m-0 toggleMenu_item_text">Chat</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2 toggleMenu_item_icon">
                        <i className="fas fa-globe-africa"></i>
                    </div>
                    <div className="col-10">
                        <p className="m-0 toggleMenu_item_text">Select Language</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <Link to="/sign-in" className="toggleMenu_item_button btn btn-block">Login</Link>
                </div>
            </div>
        </>
    )
}

export default ToggleMenu
