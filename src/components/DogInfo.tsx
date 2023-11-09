import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button"
import axios from 'axios';
import { Dog } from "../interfaces/interfaces"
import {URL} from '../consts/contsts'
import './DogInfo.css'

interface DogInfoProps {
    dog: Dog
    retriggerAPI: (toRetriger: boolean) => void
}


const DogsInfo = ({dog, retriggerAPI} :DogInfoProps) => {



    
    const EDIT = 'Edit'
    const DELETE = 'Delete'
    const SAVE = 'Save'
    const CANCEL = 'Cancel'

    const {name, picture, age,weight, sex, owner, id } = dog
    const [editedDog, setEditedDog] = useState<Dog | null>(null)



    useEffect(() => {setEditedDog(null)}, [dog])

    const onClickCancelDelete = () => {
        if(!editedDog){
            deleteDog()
        }else{
            setEditedDog(null)
        }
        
    }

    const onEditDog = () => {
        if(!editedDog){
            setEditedDog(dog)
        }else{
            onSave()
            setEditedDog(null)
        }
        
    }

    const deleteDog = () =>{
        axios.delete(URL + '/' + id)
        .then(res => {
            console.log('delete successful')
            retriggerAPI(true)
        }
      ).catch( error => console.log(error)
      )
    }

    const onInputChange = (e: any) =>{
        console.log(e.target.id)
        console.log(e.target.value)
        const dogCopy = {...editedDog};
        if(e.target.id && e.target.value){
            //@ts-ignore: nextline
            setEditedDog({...dogCopy, [e.target.id]: e.target.value})
        }
    }


    const onSave = () => {
        console.log('Save is called')
        //validate values
        axios.put(URL + '/' + id, editedDog)
        .then(res => {
            console.log('delete successful')
            retriggerAPI(true)
        }
      ).catch( error => console.log(error)
      )
    }
    


        return(
            <>
                <div className="parent-div">
                    <div className="left-div">
                        <h1>{name}</h1>
                        <p>Sex</p>
                        {editedDog ? 
                            <select id="sex" name="sex" defaultValue={sex} onChange={(e) => onInputChange(e)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                          </select>
                        
                        : <p>{sex}</p> }
                        <br/>

                        <p>{`Age (years)`}</p>
                        {editedDog ? <input type='number'
                            id="age"
                            defaultValue={age}
                            onChange={(e) => onInputChange(e)}
                            /> : <p>{age}</p> }
                        <br/>

                        <p>{`Weight (kg)`}</p>
                        {editedDog ? <input 
                            type='number'
                            defaultValue={weight}
                            id="weight"
                            onChange={(e) => onInputChange(e)}
                        /> : <p>{weight}</p> } 
                        <br/>

                        <p>Owner</p>
                        {editedDog ? <input 
                            type='string'
                            defaultValue={owner ?? `(unknown)`}
                            id="owner"
                            onChange={(e) => onInputChange(e)}
                        /> : <p>{owner ?? `(unknown)`}</p> } 
                        <br/>

                        <Button variant="contained" 
                        color="warning"
                        onClick={() => onEditDog()}
                        >{editedDog ? SAVE : EDIT}</Button> 

                        <Button variant="contained" 
                                color="error"
                                onClick={() => onClickCancelDelete()}>{editedDog ? CANCEL : DELETE}</Button> 


                    </div>
                    <div className="right-div">
                    <img src={picture} width={416}/>
                    </div>
                
                </div>
            </>
        )


}

export default DogsInfo