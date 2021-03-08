import React from 'react';


const SightingForm = () => {

    return (
        <form>
      <input 
        type="text"
        placeholder="Superhero name..."
      />
      <input 
        type="text"
        placeholder="City..."
      />
        <input 
        type="text"
        placeholder="Date and time..."
      />
      <input 
        type="submit"
        value="Post"
      />
    </form>
    );
}


export default SightingForm;