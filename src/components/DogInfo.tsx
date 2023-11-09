
import Button from "@mui/material/Button"
import axios from 'axios';
import { Dog } from "../interfaces/interfaces"
import {URL} from '../consts/contsts'

interface DogInfoProps {
    dog: Dog
    retriggerAPI: (toRetriger: boolean) => void
}


const DogsInfo = ({dog, retriggerAPI} :DogInfoProps) => {

    
    const EDIT = 'Edit'
    const DELETE = 'Delete'

    const {name, picture, age,weight, sex, owner, id } = dog


    const deleteDog = () =>{
        axios.delete(URL + '/' + id)
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
                        <p>{sex}</p>
                        <br/>

                        <p>{`Age (years)`}</p>
                        <p>{age}</p>
                        <br/>

                        <p>{`Weight (kg)`}</p>
                        <p>{weight}</p>
                        <br/>

                        <p>Owner</p>
                        <p>{owner ?? `(unknown)`}</p>
                        <br/>

                        <Button variant="contained" color="warning">{EDIT}</Button> 
                        <Button variant="contained" 
                                color="error"
                                onClick={() => deleteDog()}>{DELETE}</Button> 


                    </div>
                    <div className="right-div">
                    <img src={picture} width={416}/>
                    </div>
                
                </div>
            </>
        )


}

export default DogsInfo