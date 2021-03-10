import React from 'react';

const NavBar = () => {
    return(
        <header className="header">

            <ul>
                <li>
                    <a href="/sightings">Home</a>
                </li>
                <li>
                    <a href="/sightings">Sightings</a>
                </li>
                <li>
                    <a href="/sightings/new">Create sighting</a>
                </li>


            </ul>



        </header>
    )
}

export default NavBar;