import React, {Fragment, useState}  from 'react';


const SightingForm = ({props, setSighting}) => {

  const [sighting, setSighting] = useState([]);

    // const [superhero, setSuperhero] = useState("");			
    // const [location, setLocation] = useState(""); 
    // const [date, setDate] = useState(""); 


// const handleSuperheroChange = (evt) => {			
//     setSuperhero(evt.target.value);
//   }

//   const handleLocationChange = (evt) => {			
//     setLocation(evt.target.value);
//   }

//   const handleDateChange = (evt) => {			
//     setDate(evt.target.value);
//   }


  const findLocationIndex =() =>{
    if (sighting) {
      return locations.findIndex(location => {sighting.location.id === location.id})
    } else {
      return null;
    }
  }

  const handleChange = (event) => {
    let propertyName = event.target.name;
    let sighting = sighting
    sighting[propertyName] = event.target.value;
    setSighting({sighting:sighting})

  }

  const handleLocation = (event) =>{
    const index = parseInt(event.target.value)
    const selectedLocation = locations[index]
    sighting["location"] = selectedLocation
    setSighting({sighting:sighting})
    
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const superheroToSubmit = superhero;
    const locationToSubmit = location;
    const dateToSubmit = date;
    if (!superheroToSubmit || !locationToSubmit){
      return
    }
    onSightingSubmit({						
        superhero: superheroToSubmit,				
        location: locationToSubmit, 
        date: dateToSubmit		
      });

    setSuperhero("");  
    setLocation("");    
    setDate("");    

  }

    return (
      <Fragment>
        <h3>Create sighting</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="time" name="time" onChange={handleChange} value={sighting.time}/>
          <input type="text" placeholder="date" name="date" onChange={handleChange} value={sighting.date}/>
          <select name="location" onChange={handleLocation} defaultValue={findLocationIndex()|| "select-location"}>
          <option disabled value="select-location" > select a location</option>
          {locationOptions}
          </select>
          <button type="submit">Save</button>
        </form>
      </Fragment>
      
    );
}


export default SightingForm;


{/* <form className="sighting-form" onSubmit={handleFormSubmit}>
      //   <input */}
      //     type="text"
      //     placeholder="Superhero name"
      //     value={superhero} 
      //     onChange={handleSuperheroChange}									
      //   />
      //   <input
      //     type="text"
      //     placeholder="Location"
      //     value={location} 		
      //     onChange={handleLocationChange}							
      //   />
      //    <input
      //     type="date"
      //     placeholder="Date"
      //     value={date} 		
      //     onChange={handleDateChange}							
      //   />
      //   <input type="submit" value="Submit" />
      // </form>