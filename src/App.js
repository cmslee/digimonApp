import { useState, useEffect} from 'react';
import DigimonList from './components/DigimonList'
import './App.css';

function App() {
  //in useState, there is state variable and function to update 
  const [digimon, setDigimon] = useState (null);
  
  //useEffect is an arrow function + an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await res.json();
        console.log(data);
        setDigimon(data)
      } catch (e) {
        console.error(e)
      }
    };
    fetchData()
  }, [])
  //*we pass the state variable into DigimonList component via the prop 'digimon' to make the state data available on that level
  return (
    <div className="App">
      <h1>Digimon App</h1>
      {digimon && <DigimonList digimonData={digimon}/>}
    </div>
  );
}

export default App;
