import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button } from 'react-bootstrap';

import "./Entry.css"

class Entry extends React.Component {
    render() {
        return (

            <Jumbotron>
                <div className="entryPoint">
                    <h1>Welcome to XXX</h1>
                    <p>Please Select Your Action:</p>

                    <div>
                        I wish to
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button variant="color-0">REQUEST</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        or
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         <Button variant="color-0">PROVIDE</Button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        a Service.
                    </div>


                </div>
            </Jumbotron>
        );
    }
}
export default Entry;
