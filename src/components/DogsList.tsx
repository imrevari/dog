import List from '@mui/material/List';
import { Dog } from '../interfaces/interfaces';
import DogListElement from './DogListElement';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import './DogsList.css'

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
                            <div className='flex-container'>
                            <h1 className='paragraph'>{HEADER_TEXT}</h1>
                            <Button variant="contained" className='list-button'>{ADD_DOG_TEXT}</Button>     
                            </div>        
                                                     
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