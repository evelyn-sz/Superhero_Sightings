import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar';
import SightingsContainer from './SightingsContainer';
import './MainContainer.css';



const MainContainer = () =>{
    return(
        <div className="mainContainer">
        <Router>
            <NavBar className="navBar"/>
            <Switch>
                <Route path="/sightings" component={SightingsContainer}/>
            </Switch>
        </Router>
        </div>

    )
}

export default MainContainer;