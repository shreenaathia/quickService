import React from 'react';

import { Route, Switch } from 'react-router-dom'


import Home from './Home';
import Discover from './Discover';
import AboutUS from './AboutUS';

class Main extends React.Component {
   render() {
      return (
         <Switch>
                        
            <Route exact path='/' render={() => (
               <Home title="Home" />

            )} />

            <Route exact path='/Home' render={() => (
               <Home title="Home" />

            )} />

            <Route exact path='/Discover' render={() => (
               <Discover title="Discover" />

            )} />

            <Route exact path='/AboutUS' render={() => (
               <AboutUS title="AboutUS" />

            )} />



         </Switch>


      );
   }
}

export default Main;


/*
      <div className="mainPage">

           <Header/>
           <EntryHeader/>
           <EntryContent/>
           <Footer/>
        </div>
        */