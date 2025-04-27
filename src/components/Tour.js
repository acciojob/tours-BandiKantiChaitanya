import React, { useState } from 'react'

function Tour({tours,onRemove }) {
    // console.log(tourPackages)
    const [readMoreStates, setReadMoreStates] = useState({});
    

    const toggleReadMore = (index) => {
        setReadMoreStates((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };

    
  return (
    <div>
        
        
                <article  style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}  >
                <img src={tours.image} alt='image' height='100px' width='auto' />
                <footer>
                    <div>
                        <h4>{tours.name}</h4>
                        <h4>{tours.price}</h4>
                    </div>
                    <p id={`tour-item-para-rec6d6T3q5EBIdCfD`} >
                    {readMoreStates[tours.id] 
                  ? tours.description
                  : `${tours.description.substring(0, 200)}...`} 
                <button onClick={() => toggleReadMore(tours.id)}  id={`see-more-rec6d6T3q5EBIdCfD`} >
                  {readMoreStates[tours.id] ? 'Show less' : 'Show more'}
                </button>
                    </p>
                    <button onClick={()=>{onRemove(tours.id)}}  id={`delete-btn-rec6d6T3q5EBIdCfD`} >Remove</button>
                </footer>
                </article>
            
        
    </div>
  )
}

export default Tour