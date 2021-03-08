import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SightingsContainer from './SightingsContainer';

const MainContainer = () =>{
    return(
        <Router>
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/sightings" component={SightingsContainer}/>
                </Switch>
            </Fragment>
        </Router>

    )
}

export default MainContainer;