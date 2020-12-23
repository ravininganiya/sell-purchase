import React from 'react'
import {
    logo
} from '../../assests/IconAsset';
import { Link } from 'react-router-dom';

function MenuNavbar() {
    return (
        <>
            <div className="container">
                <div className="row navbar_nav_row mt-2">
                    <div className="col-lg-3 col-4 col-md-3 d-md-flex d-none text-center m-0">
                        <Link to="/">
                            <img className="img-fluid toggle_img" alt="logo" src={logo} />
                        </Link>
                    </div>
                    <div className="col-lg-5 col-md-4 col-12 mt-3 d-md-flex d-none align-items-center mt-md-0 Navbar-row-inputs" >
                        <div className="input-group Navbar-row-input rounded">
                            <div className="input-group-prepend">
                                <span className="input-group-text rounded-0" id="search-icon"><i className="fa fa-search "></i></span>
                            </div>
                            <input placeholder="Search Keyword..." className="form-control navbar_input_text pl-0" aria-describedby="search-icon" />
                            <div className="input-group-append">
                                <button className="form-control btn btn-primary rounded-0 navbar_input_button border-0" >Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 mt-sm-0 d-md-flex d-none align-items-center">
                        <div className="row justify-content-center align-items-center Navbar_right_side">
                            <div className="col-5 col-md-5 d-sm-flex justify-content-center navbar_location">
                                <span className="fas fa-map-marker-alt text-center Navbar-row-icon-location">&nbsp;</span>
                                <b className="text-center Navbar-Whole-Kabul dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" >
                                    New Delhi
                                    </b>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="">New Delhi</a>
                                    <a className="dropdown-item" href="">New Delhi</a>
                                    <a className="dropdown-item" href="">New Delhi</a>
                                </div>
                            </div>
                            <div className="col-3 col-md-4 d-md-flex d-none text-center Navbar-row-items">
                                <span className="far fa-user-circle Navbar-row-icons">&nbsp;</span>
                                <b className="Navbar-row-login-button-link">
                                    <Link to="/sign-in">Login</Link>
                                </b>
                            </div>
                            <div className="col-4 col-md-3 d-md-flex d-none text-center Navbar-row-items-sell p-0">
                                <Link to="/sell">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 236.066" enableBackground="new 0 0 500 236.066"><g><g><path fill="none" d="M133.29,29.668c-18.623,0-36.059,4.325-51.025,11.924l105.613,119.676L82.265,41.592c-7.507,3.8-14.392,8.412-20.525,13.729c-18.335,15.872-29.646,37.77-29.646,61.951c0,48.414,45.281,87.608,101.196,87.608h89.412V52.282v152.598h142.953c55.868,0,101.188-39.194,101.188-87.608c0-35.868-24.942-66.748-60.666-80.286L276.621,183.834L406.176,36.985c-12.398-4.705-26.13-7.317-40.521-7.317H133.29z" /><path fill="#524A49" d="M133.29,204.879c-55.915,0-101.196-39.194-101.196-87.608c0-24.181,11.311-46.079,29.646-61.951c6.134-5.316,13.019-9.928,20.525-13.729L66.732,23.967c-9.224,4.848-17.63,10.879-24.989,17.913C21.497,61.212,8.961,87.82,8.961,117.271c0,58.866,50.116,106.61,111.979,106.61h101.762v-19.002H133.29z" /><path fill="#24A8E0" d="M421.903,19.169l-15.728,17.816c35.724,13.538,60.666,44.417,60.666,80.286c0,48.414-45.319,87.608-101.188,87.608H222.702v19.002h155.302c61.807,0,111.979-47.744,111.979-106.61C489.982,73.233,461.904,35.463,421.903,19.169z" /><path fill="#5DC6C8" d="M133.29,29.668h232.364c14.392,0,28.123,2.612,40.521,7.317l15.728-17.816c-13.445-5.465-28.319-8.504-43.899-8.504H120.94c-19.671,0-38.156,4.797-54.208,13.302l15.533,17.625C97.231,33.993,114.667,29.668,133.29,29.668z" /></g><g><g><path fill="#24A8E0" d="M204.764,138.458c3.506,1.795,8.893,3.59,14.451,3.59c5.986,0,9.149-2.479,9.149-6.242c0-3.59-2.736-5.643-9.663-8.123c-9.577-3.334-15.819-8.637-15.819-17.016c0-9.834,8.209-17.359,21.805-17.359c6.499,0,11.287,1.368,14.708,2.908l-2.908,10.518c-2.309-1.112-6.413-2.736-12.057-2.736c-5.644,0-8.38,2.565-8.38,5.558c0,3.677,3.25,5.302,10.689,8.124c10.176,3.762,14.964,9.064,14.964,17.188c0,9.662-7.439,17.871-23.259,17.871c-6.584,0-13.083-1.711-16.333-3.506L204.764,138.458z" /><path fill="#24A8E0" d="M284.804,127.512h-21.207v13.682h23.687v10.688h-36.77V94.248h35.572v10.688h-22.489v11.972h21.207V127.512z" /><path fill="#24A8E0" d="M296.178,94.248h13.083v46.688h22.917v10.945h-36V94.248z" /><path fill="#24A8E0" d="M339.875,94.248h13.083v46.688h22.917v10.945h-36V94.248z" /></g><g><path fill="#24A8E0" d="M157.253,92.357v22.773h21.833v9.819h-21.833v22.981h-10.237V124.95h-21.832v-9.819h21.832V92.357H157.253z" /></g></g></g></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuNavbar
