import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import Tours from './Tours';
import { RemoveTourContext } from './RemoveTour.Context';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const { tours, setTours } = useContext(RemoveTourContext);


  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error) {
      setLoading(false);
      console.log(error);
    }
    
  }
    
  useEffect(() => {
    fetchTours();
  },[]);

  if(loading) {
    return 
      <main>
        <Loading />
      </main>
  }

  if(tours.length === 0) {
    return (
      <main> 
        <div className='title'>
          <h2>No tours left</h2>
          <button onClick={fetchTours} className="btn">Refresh</button>
        </div>
        
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours}/>
    </main>
  )
}

export default App;