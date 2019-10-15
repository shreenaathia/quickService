import React, { Component } from 'react';
import Footer from './component/footer/Footer';
import SideBar from './component/sidebar/SideBar';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: props.highlight,
            sideBar: props.sideBar,
            hasSidebar: props.hasSidebar
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row" id="with_bg">

                        <div className="row" id="search_login_top">
                            <div className="offset-sm-1 col-sm-4" id="search_bar">
                                <form className="form-inline md-form form-sm mt-0">
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                    <input className="form-control form-control-sm ml-3 w-75" type="search" placeholder="Search" aria-label="Search"/>
                                </form>
                            </div>

                            <div className="offset-sm-5 col-sm-2" id="sign_in_up">
                                <a href="/">LogIn/</a>
                                <a href="/">&nbsp;SignUp</a>
                            </div>
                        </div>

                        <div className="row" id="title">
                            <div className="col-sm-12"><h2><em>Quick Service</em></h2></div>
                        </div>

                        <div className="row" id="nav">
                            <div className="col-sm-12">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Home" ? 'nav-link active' : 'nav-link')} href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "House Keeping" ? 'nav-link active' : 'nav-link')} href="/">House Keeping</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Plumbing" ? 'nav-link active' : 'nav-link')} href="/">Plumbing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Cooking" ? 'nav-link active' : 'nav-link')} href="/">Cooking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={(this.props.highlight === "Other" ? 'nav-link active' : 'nav-link')} href="/">Other</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        {(this.props.hasSidebar ? '<div className=" col-sm-3 col-md-1  sidebar"> {this.props.sideBar} </div>' : '')}
                        <div className={(this.props.hasSidebar ? " col-sm-offset-1 col-sm-7 col-sm-offset-1 main" : " col-sm-12 main")}>
                            {this.props.children}
                        </div>
                    </div>

                </div>
                {/* put in sidebar for testing, remove once we have actual service pages */}
                {/* <SideBar/> */}
                <Footer/>
            </div>
        );
    }
}

export default MainContainer;
