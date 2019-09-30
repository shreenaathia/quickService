import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Home</a>
                            <a className="navbar-brand" href="/">House Keeping</a>
                            <a className="navbar-brand" href="/">Plumbing</a>
                            <a className="navbar-brand" href="/">Cooking</a>
                            <a className="navbar-brand" href="/">Other</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
