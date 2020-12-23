import React from 'react';


const FooterIndex = () => {
    return (
        <>
            <div className="container-fluid  footer_section mt-2">
                <div className="container  pb-3">
                    <div className="row justify-content-md-between justify-content-lg-between pt-2">
                        <div className="col-lg-2 col-4 footer_section_popular_location">
                            <p className="popular_location">POPULAR LOCATIONS</p>
                            <a className="city">New Delhi</a>
                            <a className="city">Mumbai</a>
                            <a className="city">Bangluru</a>
                            <a className="city">Chennai</a>
                        </div>
                        <div className="col-lg-2 col-4 footer_section_popular_location">
                            <p className="popular_location">TRENDING LOCATIONS</p>
                            <a className="city">New Delhi</a>
                            <a className="city">Mumbai</a>
                            <a className="city">Bangluru</a>
                            <a className="city">Chennai</a>
                        </div>
                        <div className="col-lg-2 col-4 footer_section_popular_location">
                            <p className="popular_location">ABOUT US</p>
                            <a className="city">About Sell-Purchase Group</a>
                            <a className="city">Careers</a>
                            <a className="city">Contact Us</a>
                        </div>
                        <div className="col-lg-2 col-4 footer_section_popular_location footer_section_Sitemap">
                            <p className="popular_location">Sell-Purchase</p>
                            <a className="city">Help</a>
                            <a className="city">Sitemap</a>
                            <a className="city">Legal & Privacy information</a>
                        </div>
                        <div className="col-lg-2 col-4 footer_section_social_icon">
                            <p className="popular_location">FOLLOW US</p>
                            <span className="fa fa-facebook"></span>
                            <span className="fa fa-instagram"></span>
                            <span className="fa fa-twitter"></span>
                            <span className="fa fa-youtube"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer_end_section py-3">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 footer_end_section_in1">
                            <p className="m-0">
                                <span>Other Counteries: </span>
                                 India
                            </p>
                        </div>
                        <div className="col-6  footer_end_section_in1 d-flex justify-content-end">
                            <p className="m-0">Free Classifieds in India. © 2006-2020 Sell-Purchase</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterIndex;














{/* <div className="container-fluid footer-row-bg"> */ }
// <div className="row">
//                 <div className="col-md-3">
//                     <div className="row">
//                         <div className="col-md-12 col-12 p-0">
//                             <img src={logo} className="footer-row-logo" />
//                         </div>
//                         <div className="col-md-12">
//                             <p className="">
//                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi voluptate vero, praesentium quibusdam, sit unde consequatur ipsum accusamus pariatur repellendus nobis qui aliquam voluptatibus fugiat ullam dolorem ipsam facere.                                    </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3 pt-4">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="row">
//                                 <div className="col-md-12 col-12">
//                                     <h5>LATEST TWEETS </h5>
//                                     <hr />
//                                 </div>
//                             </div>
//                             <div className="row d-flex justify-content-center">
//                                 <div className="col-md-1 col-2 ">
//                                     <span className="fab fa-twitter footer-row-twitter"></span>
//                                 </div>
//                                 <div className="col-md-10 col-10">
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas, illo dicta sapiente consectetur sit aliquid accusamus fugiat repellat quo veniam omnis voluptatibus. Necessitatibus repellat itaque labore eligendi inventore obcaecati.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3 pt-4">
//                     <div className="d-flex justify-content-center">
//                         <div className="row">
//                             <div className="col-md-12"><h5>POPULAR POSTS <hr /></h5></div>
//                             <div className="col">
//                                 <div className="" >
//                                     <div className="row">
//                                         <div className="col-md-3 col-3 ">
//                                             <img src={carOne} className="footer-row-center-img" />
//                                         </div>
//                                         <div className="col-md-9 col-9">
//                                             <p>This is photograph version of lorem Ipsum <br /> <b className="footer-row-center-img-p">Sep20,2020</b></p>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-md-3 col-3">
//                                             <img src={carOne} className="footer-row-center-img" />
//                                         </div>
//                                         <div className="col-md-9 col-9">
//                                             <p>This is photograph version of lorem Ipsum <br /> <b className="footer-row-center-img-p">Sep20,2020</b></p>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-md-3 col-3">
//                                             <img src={carOne} className="footer-row-center-img" />
//                                         </div>
//                                         <div className="col-md-9 col-9">
//                                             <p>This is photograph version of lorem Ipsum <br /> <b className="footer-row-center-img-p">Sep20,2020</b></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3 pt-4">
//                     <div className="d-flex justify-content-center">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <h5>Contact Us <hr /></h5>
//                             </div>
//                             <div className="col-md-12">
//                                 <div className="row">
//                                     <div className="col-md-2 col-2">
//                                         <span className="fas fa-phone-alt"></span>
//                                     </div>
//                                     <div className="col-md-10 col-10">
//                                         <p>+(911234567890)<br />+(911234567890)</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-12">
//                                 <div className="row">
//                                     <div className="col-md-2 col-2">
//                                         <span className="fas fa-map-marker-alt"></span>
//                                     </div>
//                                     <div className="col-md-10 col-10">
//                                         <p>This is the photo version of lorem Ipsum</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-12">
//                                 <div className="row">
//                                     <div className="col-md-2 col-2">
//                                         <span className="fas fa-envelope"></span>
//                                     </div>
//                                     <div className="col-md-10 col-10">
//                                         <p>Support@carSale.com</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>