import React from 'react'
import {
    briefcase,
    lexsus,
    phone,
    carSale,
    truck,
    hondaBike,
    houseSale,
    residence,
} from '../../assests/IconAsset';

function Categories() {
    return (
        <div className="container pt-2">
            {/* -------------categories item start------------- */}
            <div className="row ">
                <div className="col-md-3 ">
                    <div className="row d-flex d-md-none justify-content-between categories_row_text px-3">
                        <span className="text-left">Browser Categories</span>
                        <span className="text-right sell_all">Sell All</span>
                    </div>
                    <div className="dropdown py-3 d-none categories-row-buttons d-md-flex justify-content-center">
                        <button
                            className="btn dropdown-toggle categories-row-button rounded-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Categories
                        </button>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Categories 1</a>
                            <a className="dropdown-item" href="#">Categories 2</a>
                            <a className="dropdown-item" href="#">Categories 3</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mt-2 mt-md-0">
                    <div className="row categories-col-image text-center">
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-home categories-row-icons"></i>
                            <p className="categories-row-p">Real Estate</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-car categories-row-icons"></i>
                            <p className="categories-row-p">Cars</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-mobile-alt categories-row-icons"></i>
                            <p className="categories-row-p">Mobile</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-tv categories-row-icons"></i>
                            <p className="categories-row-p">Electronics</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-motorcycle categories-row-icons"></i>
                            <p className="categories-row-p">Bike</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-couch categories-row-icons"></i>
                            <p className="categories-row-p">Furniture</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-book categories-row-icons"></i>
                            <p className="categories-row-p">Hobby</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-tshirt categories-row-icons"></i>
                            <p className="categories-row-p">Kids</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-child categories-row-icons"></i>
                            <p className="categories-row-p">Fashion</p>
                        </div>
                        <div className="col-lg col-md col-sm">
                            <i className="fas fa-paint-roller categories-row-icons"></i>
                            <p className="categories-row-p">Service</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------categories item end------------- */}
        </div>
    )
}

export default Categories
