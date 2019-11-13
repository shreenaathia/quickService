import React, { Component } from 'react';
import MainContainer from '../../MainContainer';
import SideBar from "../sidebar/Sidebar";
import HeaderSmall from "../headerSmall/HeaderSmall";
import Footer from '../footer/Footer';
import Page from '../page/Page';


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
