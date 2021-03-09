import React, {Fragment, useEffect, useState}  from 'react';
// Sighting form connected to back end

const SightingForm = ({sighting, locations, superheroes, onCreate, onUpdate}) => {

  const [stateSighting, setStateSighting] = useState(
    {
      time: "",
      date: "",
      location: null,
      superhero: null
    }
  );


  const findLocationIndex =() =>{
    if (sighting) {
      return locations.findIndex(location => sighting.location.id === location.id)
    } else {
      return null;
    }
  }
  const findSuperheroIndex =() =>{
    if (sighting) {
      return superheroes.findIndex(superhero => sighting.superhero.id === superhero.id)
    } else {
      return null;
    }
  }

  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedSighting = {...stateSighting}
    copiedSighting[propertyName] = event.target.value;
    setStateSighting(copiedSighting)

  }

  const handleLocation = function(event){
    const index = parseInt(event.target.value)
    const selectedLocation = locations[index]
    let copiedSighting = {...stateSighting };
    copiedSighting["location"] = selectedLocation
    setStateSighting(copiedSighting)
  }
  const handleSuperhero = function(event){
    const index = parseInt(event.target.value)
    const selectedSuperhero = superheroes[index]
    let copiedSighting = {...stateSighting };
    copiedSighting["superhero"] = selectedSuperhero
    setStateSighting(copiedSighting)
  }

  const handleFormSubmit = function (event) {
    event.preventDefault();
    if(stateSighting.id){
      onUpdate(stateSighting)
    } else {
      onCreate(stateSighting);
    }
  }

  useEffect(()=>{
    if(sighting){
      let copiedSighting = {...sighting}
      setStateSighting(copiedSighting)
    }
  }, [sighting])

  const locationOptions = locations.map((location, index) => {
    return <option key={index} value={index}>{location.name}</option>
  })
  const superheroOptions = superheroes.map((superhero, index) => {
    return <option key={index} value={index}>{superhero.name}</option>
  })

  let heading = "";

  if (!sighting){
    heading = "Create Sighting"
  } else {
    heading = "Edit Sighting";
  }

  if (!locations.length === 0){
    return <p>Loading...</p>
  }

  if (!superheroes.length === 0){
    return <p>Loading...</p>
  }

    return (
      <Fragment>
        <h3>{heading}</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="time" name="time" onChange={handleChange} value={stateSighting.time}/>
          <input type="text" placeholder="date" name="date" onChange={handleChange} value={stateSighting.date}/>

          <select name="location" onChange={handleLocation} defaultValue={findLocationIndex()|| "select-location"}>
          <option disabled value="select-location" > Select a Location</option>
          {locationOptions}
          </select>

          <select name="superhero" onChange={handleSuperhero} defaultValue={findSuperheroIndex()|| "select-superhero"}>
          <option disabled value="select-superhero" > Select a Superhero</option>
          {superheroOptions}
          </select>

          <button type="submit">Save</button>
        </form>
      </Fragment>
      
    );
}


export default SightingForm;
