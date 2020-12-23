import React from 'react'

import Navbar from './Navbar';
import Categories from './Categories';
import ViewItem from './ViewItem';
import Footer from '../Footer/index';

function NavbarIndex() {
    return (
        <>
           <Navbar className="Navbar_row" />
           <Categories />
           <ViewItem />
           <Footer />
        </>
    )
}

export default NavbarIndex
