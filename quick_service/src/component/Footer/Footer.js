import React, { Component } from 'react';
import '../../index.css';

class Footer extends Component {
    render() {
        const contact = 'Contact QuickService \n Seneca@York Campus \n 70 The Pond Road \n Toronto, ON M3J 3M6';
        return (
            <div>
                <br/>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div>Copyright &copy; 2019 QuickService</div>
                            <div className="col-sm-6">
                                <div className="newline">{contact}</div>
                            </div>
                            
                        </div>
                    </div>  
                </footer>
            </div>
        );
    }
}

export default Footer;
