import React from "react";
import {
    carFifth,
    carfourth,
    carOne,
    carThird,
    carTwo
} from "../../assests/IconAsset";
import { Link } from 'react-router-dom';

function ListView() {
    return (
        <>
            <div className="container px-1 px-md-0">
                <div className="list-view-row">
                    <div className="container-fluid list-view-sale">
                        <div className="row">
                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carOne}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>
                                <p className="m-0 kabul">
                                    <div className="d-flex align-items-end mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </div>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>
                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span"></span>
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carTwo}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carThird}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carfourth}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carFifth}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex  list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carOne}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <div className="d-flex align-items-end mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </div>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>
                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span"></span>
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carTwo}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carThird}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carfourth}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="m-0 kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-12 col-12">
                                <hr />
                            </div>

                            <div className="col-md-4 col-5 px-0 px-md-3">
                                <div className="container-fluid d-flex justify-content-center">
                                    <span className="listItem_img_span">
                                        <Link to='/detail-item'>
                                            <img
                                                className="img-fluid list-view-row-img"
                                                src={carFifth}
                                                alt=""
                                            />
                                        </Link>
                                        <i className="far fa-heart listItem_heart_icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-8 col-7 list-view-sale-detail">
                                <p className="d-flex  list_view_card_title">
                                    Mercedes 2005 <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inlineblock"> for sale</span>
                                </p>
                                <b className="list_view_title_price">11,700 USD</b>

                                <p className="kabul">
                                    <span className="d-flex mt-0 mt-md-5 list_view_card_footer">
                                        Kabul,Kart-e-Naw
                                        <span className="ml-auto">Today</span>
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row p-4 d-flex justify-content-center m-auto">
                    <button className="btn btn-primary list_view_load_more_button">Load More</button>
                </div>
            </div>
        </>
    );
}

export default ListView;
