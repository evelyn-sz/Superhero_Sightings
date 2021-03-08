import React, {useState}  from 'react';


const SightingForm = ({onSightingSubmit}) => {

    const [superhero, setSuperhero] = useState("");			
    const [city, setCity] = useState(""); 
    const [date, setDate] = useState(""); 


const handleSuperheroChange = (evt) => {			
    setSuperhero(evt.target.value);
  }

  const handleCityChange = (evt) => {			
    setCity(evt.target.value);
  }

  const handleDateChange = (evt) => {			
    setDate(evt.target.value);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const superheroToSubmit = superhero.trim();
    const cityToSubmit = city.trim();
    const dateToSubmit = date.trim();
    if (!superheroToSubmit || !cityToSubmit){
      return
    }
    onSightingSubmit({						
        superhero: superheroToSubmit,				
        city: cityToSubmit, 
        date: dateToSubmit		
      });

    setSuperhero("");  
    setCity("");    
    setDate("");    

  }

    return (
        <form className="sighting-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Superhero name"
          value={superhero} 
          onChange={handleSuperheroChange}									
        />
        <input
          type="text"
          placeholder="City"
          value={city} 		
          onChange={handleCityChange}							
        />
         <input
          type="date"
          placeholder="Date"
          value={date} 		
          onChange={handleDateChange}							
        />
        <input type="submit" value="Submit" />
      </form>
    );
}


export default SightingForm;