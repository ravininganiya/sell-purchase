import React, { useState } from 'react'
import ListView from './ListView'
import GridView from './GridView';
// import QuickLink from './QuickLink';

function ViewItem() {
    const [screenType, setScreenType] = useState({ screen1: "false" })
    const handleListClick = (e) => {
        setScreenType("true")
    }
    const handleGridClick = (e) => {
        setScreenType("false")
    }
    return (
        <>
            <div className="container viewItem_container px-2 px-md-3">
                {/* -------------view item start------------- */}
                <div className="row py-md-3 py-2">
                    <div className="col-7 col-md-6 pr-0 pr-md-3">
                        <p className="viewItem_container_text m-0 ">9,600 Ads in New<b> Delhi</b></p>
                    </div>
                    <div className="col-5 col-md-6 d-flex justify-content-end view_item_view_icons">
                        <div className="row viewItem_row align-items-center">
                            <div className="col-4 col-sm-4 col-md-2 text-right px-0 px-md-3">
                                <p className="m-0 "><b>View</b></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 text-center">
                                <span className="fas fa-bars text-center view_icons" onClick={() => setScreenType(handleListClick)}></span>
                            </div>
                            <div className="col-4 col-sm-4 col-md-1 text-center">
                                <span className="fas fa-th text-center view_icons" onClick={() => setScreenType(handleGridClick)}></span>
                            </div>
                            <div className="col-md-8 d-none d-md-flex col-12 col-sm-12 viewItem_Buttons text-center">
                                <button
                                    className="btn btn-outline-primary dropdown-toggle viewItem_dropdownToggle rounded-0"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="sort_by">SORT BY</span>: Date Published
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                    <a className="dropdown-item" href="#">Newest</a>
                                    <a className="dropdown-item" href="#">Lowest Price</a>
                                    <a className="dropdown-item" href="#">Highest Price</a>
                                    <a className="dropdown-item" href="#">Oldest</a>
                                </div>  
                            </div>
                        </div>


                    </div>
                </div>
                {/* -------------view item end------------- */}
                {screenType === "true" ? (
                    <ListView />
                ) : (
                        <GridView />
                    )}
            </div>
            {/* <QuickLink /> */}
        </>
    )
}

export default ViewItem
