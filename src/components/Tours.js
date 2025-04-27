import React from 'react'
import Tour from './Tour'
import { useState } from 'react';

function Tours({tourPackages}) {

    const [packages, setPackages] = useState(tourPackages);

    function handleRemove(id){
        const updatedTours = packages.filter(tour => tour.id !== id);
        setPackages(updatedTours); 
    }
    function handleReload(){
        window.location.reload();
    }
  return (
    <div>
        {packages.length === 0 ? (
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',height:'80vh'}} >
        <h1>No Tours available</h1>
        <button onClick={handleReload} >Reload</button>
        </div>
        ) : (
        packages.map((tours) => (
          <Tour key={tours.id} tours={tours} onRemove={handleRemove} />
        ))
      )}
    </div>
  )
}

export default Tours