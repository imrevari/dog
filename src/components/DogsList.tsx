import List from '@mui/material/List';
import { Dog } from '../interfaces/interfaces';
import DogListElement from './DogListElement';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';

interface DogsListProps {
    dogs: Dog[]
    onClick: (dog: Dog) => void
}



const DogsList = ({dogs, onClick}: DogsListProps) => {

    const HEADER_TEXT = 'My Dogs'
    const ADD_DOG_TEXT = 'ADD DOG'

        return(
            <div>

                <List sx={{ width: '360px', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={                              
                        <ListSubheader>        
                            {HEADER_TEXT}
                            <Button variant="contained">{ADD_DOG_TEXT}</Button>                          
                        </ListSubheader>

                    }
                
                >

                {dogs.map( (dog, index ) => <DogListElement
                    key={index}
                    dog={dog}
                    onClick={onClick}
                />)}
                
                </List>


            </div>


        )

}

export default DogsList