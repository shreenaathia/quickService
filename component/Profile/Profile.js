import React, { Component } from 'react';
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Footer from '../Footer/Footer';

import "./Profile.css";

class Profile extends Component {
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
                <h1> profile success</h1>
                <Footer/>
            </div>
        );
    }
}

export default Profile;
