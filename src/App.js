import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ movie, setMovie ] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=047e66f105b553e0beff7f005bd621d0&language=ko&append_to_response=KR')
      .then((res) => res.json())
      .then((data) => {
        console.log("data")
      })
  })

  return (
    <div>
      
    </div>
  );
}

export default App;
