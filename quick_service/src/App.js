import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import NotFound from "./NotFound";

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' render={() => (
                        <NavBar/>
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
