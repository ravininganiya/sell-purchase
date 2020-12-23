import React from 'react';
import {
    carOne,
    carTwo,
    carThird,
    carfourth,
    carFifth,
    carSixth
} from '../../assests/IconAsset';
// import history from '../../history';
import { Link } from 'react-router-dom';

function GridView() {
    // const [screenType, setScreenType] = useState({ screen: "false" });
    // const handleDetailView = () => {
    //     setScreenType("true");
    // }
    // const handleDetailView = () => {
    //     history.push("./detail-item")
    // }
    return (
        <>
            <div className="container">
                {/* ------------banner start--------- */}
                <div className="row gridview_items ">
                    <div className="col-md-4 mb-3 px-1 p-0 col-6 banner-row-container-card">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carOne} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>

                            <div className="card-body p-0 ">
                                <p className="card-title banner-row-container-sale-p">
                                    <b>
                                        Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                        <span className="d-none d-md-inline"> for sale</span>
                                    </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carTwo} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carThird} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD  m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carfourth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carFifth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carSixth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6 banner-row-container-card">
                        <div className="card " >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carThird} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0 ">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carSixth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carFifth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD  m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6 banner-row-container-card">
                        <div className="card " >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carTwo} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0 ">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carSixth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carFifth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD  m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6 banner-row-container-card">
                        <div className="card " >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carOne} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0 ">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carfourth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carFifth} alt="Card image cap" />
                                </Link>

                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD  m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6 banner-row-container-card">
                        <div className="card " >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carOne} alt="Card image cap" />
                                </Link>

                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0 ">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card" >
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carTwo} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 px-1 p-0 col-6">
                        <div className="card">
                            <span className="gridItem_img_span">
                                <Link to='/detail-item'>
                                    <img className="card-img-top img-fluid" src={carFifth} alt="Card image cap" />
                                </Link>
                                <i className="far fa-heart girdview_heart_icon"></i>
                            </span>
                            <div className="card-body p-0">
                                <p className="card-title banner-row-container-sale-p"><b>
                                    Mercedes 2005<span className="d-inlineblock d-md-none">...</span>
                                    <span className="d-none d-md-inline"> for sale</span>
                                </b>
                                </p>
                                <p className="card-text banner-row-container-USD  m-0 m-md-1"><b>11,700 Rupees</b></p>
                                <p className="d-flex justify-content-between px-1 banner_card_footer  my-1 my-md-3 m-0 m-md-3"><span>New Delhi</span> <span>Today</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center m-auto">
                        <button className="btn btn-primary banner-row-container-view-list">Load More</button>
                    </div>
                </div>
                {/* ------------banner end--------- */}
            </div>

        </>
    )
}

export default GridView;
