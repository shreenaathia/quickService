import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./MainContainer";
import NotFound from "./NotFound";
import SignUp from "./component/signup/SignUp";
import Home from "./component/home/Home";
//import Footer from "./component/Footer/Footer";

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' render={() => (
                        <Home />
                    )}/>

                    <Route exact path='/signup' render={() => (
                        <SignUp />
                    )}/>

                    <Route render={() => (
                        <NotFound/>
                    )}/>

                </Switch>

             </BrowserRouter>
        );
    }

}

export default App;
