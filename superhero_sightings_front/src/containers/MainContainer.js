import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar';
import SightingsContainer from './SightingsContainer';

import './MainContainer.css';

import MapView from '../components/maps/MapView';



const MainContainer = () =>{
    return(
      <>
        <Router>
        <Fragment>
            <NavBar/>
            <Switch>
                <Route path="/sightings" component={SightingsContainer}/>
            </Switch>
        </Fragment>
        </Router>
        <MapView/>
        </>

    )
}

export default MainContainer;