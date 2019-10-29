import React, { Component } from 'react';
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Footer from '../Footer/Footer';

import "./Booking.css";

class Booking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
           
                <HeaderSmall/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>

              
                    <h1>Booking success</h1>
                    
                <Footer/>
                
                </>
            
        );
    }
}

export default Booking;
