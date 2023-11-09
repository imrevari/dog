import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Dog } from './interfaces/interfaces';
import DogsList from './components/DogsList';

import axios from 'axios';
import DogsInfo from './components/DogInfo';
import ListSubheader from '@mui/material/ListSubheader/ListSubheader';
import { URL } from './consts/contsts';




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
  const [retriggerAPi, setRetriggerAPI] = useState<boolean>(false)

  
  const fetchData = () => {
    axios.get(URL)
    .then(res => {
      const dogs = res.data;
      setDogsList(dogs)
      setSelectedDog(dogs[0])
      setRetriggerAPI(false)
    }
      ).catch( error => console.log(error));
  }


  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
        if(retriggerAPi) {
          fetchData()
        }
  }, [retriggerAPi])

  const selectDog = (dog: Dog) =>{
    setSelectedDog(dog)
  } 


  return (
    <>
      <h1 className='h1'>Hiya for Dogs</h1>
      {/* <ListSubheader>Test </ListSubheader> */}
      <div className="parentdiv">
        <div>
          <DogsList dogs={dogsList} onClick={selectDog}/> 
        </div>
        <div className='rightdiv'>
          <DogsInfo dog={selectedDog} 
          retriggerAPI={setRetriggerAPI}/>
        </div>
      </div>
    </>


    
  );
}

export default App;
