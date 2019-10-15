import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./MainContainer";
import NotFound from "./NotFound";
//import Footer from "./component/Footer/Footer";

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Switch>

                    <Route exact path='/' render={() => (
                        <div>
                            <MainContainer/>
                        </div>
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
