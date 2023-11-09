import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Dog } from './interfaces/interfaces';
import DogsList from './components/DogsList';

import axios from 'axios';
import DogsInfo from './components/DogInfo';
import ListSubheader from '@mui/material/ListSubheader/ListSubheader';




function App() {

  const defaultDog = {
    name: '',
    picture: '',
    age: 0,
    weight: 0,
    sex: '',
    owner: 'string',
    id: 0
  }



  const [dogsList, setDogsList] = useState<Dog[]>([])
  const [selectedDog, setSelectedDog] = useState<Dog>(defaultDog)

  const URL = 'http://localhost:3001/api'


  useEffect(() => {
    axios.get(URL)
    .then(res => {
      const dogs = res.data;
      console.log(dogs);
      setDogsList(dogs)
      setSelectedDog(dogs[0])
    }
      ).catch( error => console.log(error)

      );
    }, [])

  const selectDog = (dog: Dog) =>{
    setSelectedDog(dog)
  } 


  return (
    <>
      {/* <h1>Hiya for Dogs</h1> */}
      <ListSubheader>Test </ListSubheader>
      <div className="parentdiv">
        <div className='leftdiv'>
          <DogsList dogs={dogsList} onClick={selectDog}/> 
        </div>
        <div className='rightdiv'>
          <DogsInfo dog={selectedDog}/>
        </div>
      </div>
    </>


    
  );
}

export default App;
