import React, { Component } from 'react';
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Footer from '../Footer/Footer';

import "./Discover.css";


class Discover extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <HeaderSmall/>
                    <h1>discover success</h1>
                <Footer/>
            </div>
        );
    }
}

export default Discover;
