import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        //console.log(this.props.highlight);
        return(
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Overview" ? 'active' : '')}>Overview <span className="sr-only">(current)</span></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Projects" ? 'active' : '')}>Projects</li>
                    <li className={(this.props.highlight === "Teams" ? 'active' : '')}>Teams</li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}>Employees</li>
                </ul>
                {/* <ul className="nav nav-sidebar">
                    <li>Rating</li>
                    <li>Price</li>
                    <li>Location</li>
                </ul> */}
          </div>
        );
    };
}

export default SideBar;