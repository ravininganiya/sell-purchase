import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {
//     logo
// } from '../../assets/IconAsset';

import ToggleMenu from '../Home/Togglemenu';
// import Navbar from '../Home/Navbar----old';
// import MenuNavbar from '../Home/MenuNavbar';
import MenuNavbar from '../Home/Navbar';
import Categories from '../Home/Categories';
import DetailItem from './DetailItem';
import FooterIndex from '../Footer/index';

function Index() {
    const [status, setStatus] = useState(true)
    const handleBarClick = (e) => {
        console.log(e);
        setStatus(!status);
    }
    return (
        <>
            {status === false ? (
                <>
                    <div hidden={status} className="">
                        <ToggleMenu />
                    </div>
                </>
            ) : (
                    <>
                        <div className="d-none d-md-block">
                            <MenuNavbar />
                            <Categories />
                        </div>

                        <DetailItem />
                        <FooterIndex />
                    </>
                )}


        </>
    )
}

export default Index;
























{/* <div className="container pt-3">
                <div className=" d-md-none text-center">
                    {status === true ? (
                        <>
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    <i className="fas fa-bars toggle_icon_bar" onClick={handleBarClick}></i>
                                </div>
                                <div className="col-4 pl-0 ">
                                    <Link to="/"><img className="img-fluid toggle_img " src={logo} /></Link>
                                </div>
                                <div className="col-6 text-right toggle_icon_location">
                                    <span className="fas fa-map-marker-alt text-center ">&nbsp;</span>
                                    <b className="text-center dropdown-toggle toggle_location" data-toggle="dropdown" id="dropdownMenuButton" >
                                        Whole Kabul
                                </b>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ transform: "translate3d(38px, 20px, 0px)", minWidth: "8rem" }}>
                                        <a className="dropdown-item navbar_index_dropdown text-center py-1" href="#">Whole Kabul</a>
                                        <a className="dropdown-item navbar_index_dropdown text-center py-1" href="#">Whole Kabul</a>
                                        <a className="dropdown-item navbar_index_dropdown text-center py-1" href="#">Whole Kabul</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                            <>
                                <div className="row  d-flex align-items-center">
                                    <div className="col-2 ">
                                        <i className="fas fa-times toggle_icon_time" onClick={handleBarClick}></i>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/"><img className="img-fluid " src={logo} /></Link>
                                    </div>
                                    <div className="col-7 text-right toggle_icon_location">
                                        <span className="fas fa-map-marker-alt text-center ">&nbsp;</span>
                                        <b className="text-center dropdown-toggle toggle_location" data-toggle="dropdown" id="dropdownMenuButton" >
                                            Whole Kabul
                                        </b>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Whole Kabul</a>
                                            <a className="dropdown-item" href="#">Whole Kabul</a>
                                            <a className="dropdown-item" href="#">Whole Kabul</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                </div>
            </div> */}