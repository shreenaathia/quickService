import React, { Component } from 'react';
import MainContainer from '../../MainContainer';
import SideBar from "../sidebar/Sidebar";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Footer from '../Footer/Footer';
import Page from '../Page/Page';


class Example extends Component {
    render() {
        return (
            <div>

                <HeaderSmall />
<main>
            
                <SideBar />
                <Page />
</main>
                <Footer />

            </div>
        );
    }
}

export default Example;
