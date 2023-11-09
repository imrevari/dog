import List from '@mui/material/List';
import { Dog } from '../interfaces/interfaces';
import DogListElement from './DogListElement';


const DogsList = ({dogs}: {dogs: Dog[]}) => {

        return(
            <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {dogs.map( ({name, sex, id}, index ) => <DogListElement
                    key={index}
                    id={id}
                    name={name}
                    sex={sex}
                />)}
                
                </List>


            </div>


        )

}

export default DogsList