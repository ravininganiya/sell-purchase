import React, { useState } from 'react';

import {
    userIcon,
    adsImage,
    twitter,
    pinterest,
    whatsup,
    messanger,
    facebook,
    message,
    file,
    detailCar1,
    detailCar3,
    detailCar5,
    detailCar6,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6

} from '../../assests/IconAsset';
import QuickLink from '../Home/QuickLink';
import { Link } from 'react-router-dom'
function DetailItem() {
    const [description, setDescription] = useState(true);
    const handleDescriptions = (e) => {
        // console.log(e)
        setDescription(!description)
    }
    return (
        <>
            {/* <div className="container detailItem_categories  d-md-flex d-none py-2 mt-4">
                <div className="row detailItem_categories_in d-flex">
                    <div className="px-2 px-lg-0">
                        <a className="d-flex detailItem_categories_p1 pl-2">All Categories <i className="fa fa-caret-down pl-2"></i></a>
                    </div>
                    <div className="px-2">
                        <a>Cars</a>
                    </div>
                    <div className="px-2">
                        <a>Motorcycles</a>
                    </div>
                    <div className="px-2">
                        <a>Mobile Phones</a>
                    </div>
                    <div className="px-2">
                        <a>For Sale: Houses & Apt</a>
                    </div>
                    <div className="px-2">
                        <a>Scooters</a>
                    </div>
                    <div className="px-2">
                        <a>Commercial & Other Vehicles</a>
                    </div>
                    <div className="px-2">
                        <a>For Rent: Houses & Apt</a>
                    </div>
                </div>
            </div> */}
            <div className="container detailItem_container mt-3">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="card detailItem_card">
                            <div className="card-body p-0 d-flex justify-content-center detailItem_card_body">
                                <Link to="/" className="detailItem_angle_left_icon d-md-none">
                                    <i className="fas fa-chevron-left"></i>
                                </Link>
                                <div className="carousel slide" data-ride="carousel" id="carouselIndicators">
                                    <div className="carousel-inner detailItem_card_body_img">
                                        <div className="carousel-item active">
                                            <div className="view">
                                                <img className="d-block w-100 detailitem_image_slider" src={slider1} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>1/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider2} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>2/8</span>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider3} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>3/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider4} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>4/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider5} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>5/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider6} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>6/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider3} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>7/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="view">
                                                <img className="d-block w-100" src={slider5} alt="First slide" />
                                                <div className="mask rgba-black-light"></div>
                                                <div className="carousel-caption">
                                                    <p>
                                                        <span style={{ backgroundColor: "rgba(0,0,0,.5)", padding: "8px 20px", borderRadius: "8px" }}>8/8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <i className="far fa-heart detailitem_img_heart"></i>
                                    <i className="fas fa-ellipsis-h detailitem_img_ellipsis d-md-none d-flex"></i>
                                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="detailItem_card_body_badge px-3 d-none d-md-flex">
                                    <span className="">20,000 USD</span>
                                </div>
                            </div>
                            <div className="card-header ">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="detailItem_container_card_header mb-0">Mercedes Benz <span className="d-inlineblock d-md-none">...</span>
                                            <span className="d-none d-md-inline"> for sale 2020 E240</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 detailItem_Icons" >
                                        <span className="far fa-clock"> Today</span>

                                        <span className="fas fa-map-marker-alt px-2"> Kabul kart-e-Now </span>

                                        <span className="far fa-eye "> 64 Views</span>
                                    </div>
                                </div>
                            </div>


                            <div className="footer ">
                                <div className="container">
                                    <p className="detail_item_description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolorem eligendi ducimus placeat, ullam mollitia pariatur
                                        <span hidden={description} className="d-md-flex"> in.
                                        Fugit harum commodi temporibus cumque rem officiis natus quas, nam ipsam, modi suscipit voluptate.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolorem eligendi ducimus placeat, ullam mollitia pariatur in.
                                        Fugit harum commodi temporibus cumque rem officiis natus quas, nam ipsam, modi suscipit voluptate.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolorem eligendi ducimus placeat, ullam mollitia pariatur in.
                                        Fugit harum commodi temporibus cumque rem officiis natus quas, nam ipsam, modi suscipit voluptate.
                                        </span>
                                        {description === true ? (

                                            <>
                                                <a onClick={handleDescriptions} className="text-center detail_item_read_more_btn d-md-none d-flex text-center">
                                                    Read More description
                                                    </a>
                                            </>

                                        ) : (
                                                <>
                                                    <a onClick={handleDescriptions} className="text-center detail_item_read_more_btn d-md-none d-flex text-center">
                                                        Hide description
                                                    </a>
                                                </>
                                            )}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <button className="btn btn-danger btn-block detail_write_seller">
                                    <span className="far fa-comments" >Write to Seller</span>
                                </button>
                                <button className="btn btn-outline-primary btn-block">
                                    <span className="fas fa-phone-volume" >+078562xxxxx</span>
                                </button>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 border border-primary rounded d-flex justify-content-center mb-2">
                                    <div className="">
                                        <div className="row d-flex justify-content-center">
                                            <img className="m-2" src={userIcon} alt="" />
                                        </div>
                                        <div className="row d-flex justify-content-center"><h5><b>Krishu Teachkul</b></h5></div>
                                        <div className="row d-flex justify-content-center mb-1"><b>Kabul, Kart-e-Naw</b></div>
                                        <div className="row d-flex justify-content-center"><b>User Since 14 Aug, 2012</b></div>
                                        <div className="row d-flex justify-content-center">
                                            <button className="btn btn-primary btn-block mb-3 mt-3">Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary btn-block">See user other ads</button>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center m-2">
                            <img className="img" src={adsImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4" >
                    <div className="col-md-12 col-12 ">
                        <h5 className="">Share with a friend</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-12 detailItem_similar_social_icon">
                        <img className="img-fluid " src={twitter} />
                        <img className="img-fluid" src={pinterest} />
                        <img className="img-fluid" src={whatsup} />
                        <img className="img-fluid " src={messanger} />
                        <img className="img-fluid" src={facebook} />
                        <img className="img-fluid" src={message} />
                        <img className="img-fluid" src={file} />
                    </div>
                </div>


                {/* ----------------Similar ads--------------- */}
                <div className="row detailItem_similar_ads">
                    {/* <div className="col-md-12">
                    <div className="row"> */}
                    <div className="col-md-12 col-12">
                        <h5 className="mt-4">Similar Ads</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-2 col-6 p-0 px-1 ">
                        <div className="card rounded-0" >
                            <img className="card-img-top " src={detailCar3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale <span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar5} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar6} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar5} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar6} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card  rounded-0" >
                            <img className="card-img-top " src={detailCar3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 col-6 p-0 px-1">
                        <div className="card w-80 rounded-0" >
                            <img className="card-img-top " src={detailCar5} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title detailItem_card_title">Mercedes 2005 for sale<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> 2020 E240</span></h5>
                                <p className="card-text  detailItem_similar_ads_p" ><b>11,700 USD</b></p>
                            </div>
                        </div>
                    </div>
                    {/* </div>
                </div> */}
                </div>
            </div>
            <QuickLink />
        </>
    )
}

export default DetailItem
