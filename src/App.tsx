import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Dog } from './interfaces/interfaces';
import DogsList from './components/DogsList';

function App() {

  const [dogsList, setDogsList] = useState<Dog[]>([])


  useEffect(() => {
    setDogsList([
      {name:"Monty",
      picture:"https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      age:2,
      weight:11,
      sex:"male",
      neutered:true,
      owner:"Elon Musk",
      id:1}
    ])

  },[])




  return (
    <div className="App">
      <DogsList dogs={dogsList}/>


    </div>
  );
}

export default App;
