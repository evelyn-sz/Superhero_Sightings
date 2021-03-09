import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar';
import SightingsContainer from './SightingsContainer';

const MainContainer = () =>{
    return(
        <Router>
        <>
            <NavBar/>
            <Switch>
                <Route path="/sightings" component={SightingsContainer}/>
            </Switch>
        </>
        </Router>

    )
}

export default MainContainer;