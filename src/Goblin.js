import React from 'react';

export default function Goblin({ goblinFormName, goblinFormHP, goblinFormColor, handleDeleteGoblin }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => handleDeleteGoblin && handleDeleteGoblin(goblinFormName)}>
      <h3>{goblinFormName}</h3>  
      <img src="goblin.png" style={{ backgroundColor: goblinFormColor }} />
      <p>{goblinFormHP} HP</p>
    </div>
  );
}
