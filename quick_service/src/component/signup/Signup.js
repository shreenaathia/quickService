import React, { Component } from 'react';
import MainContainer from '../../MainContainer';

class SignUp extends Component {
    // constructor() {
    //     super();
    //     this.state = {

    //     }
    // }

    render() {
        return (
            <MainContainer>
                <div className="signup">
                    <div className="container">
                        <br />
                        <h2>Create account</h2>
                        <br />

                        <form>
                            <fieldset>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="first_name">First Name:</label>
                                        <input className="form-control" id="firstName" name="firstName" type="text" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="last_name">Last Name:</label>
                                        <input className="form-control" id="lastName" name="lastName" type="text" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="email">Email:</label>
                                        <input className="form-control" id="email" name="email" type="email" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="password">Password:</label>
                                        <input className="form-control" id="password" name="password" type="text" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="repassword">Re-enter Password:</label>
                                        <input className="form-control" id="repassword" name="repassword" type="text" />
                                    </div>
                                </div>
                            </fieldset>
                            
                            <hr />

                            <input type="submit" className="btn btn-primary pull-right" value="Confirm" /><br /><br /><br />
                        </form>
                    </div>
                </div>
            </MainContainer>

        );
    }
}

export default SignUp; 