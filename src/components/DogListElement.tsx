
import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import PetsIcon from '@mui/icons-material/Pets';

import { Dog } from "../interfaces/interfaces"


interface DogsListElementProp {
    dog: Dog
    onClick: (dog: Dog) => void
}


const DogListElement = ( {dog, onClick} : DogsListElementProp) => {

    const {name, sex} = dog;

    return(
        <div>
            <ListItem
                onClick={() => onClick(dog)}
             >
                <ListItemAvatar>
                <Avatar>
                    <PetsIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={sex} />
            </ListItem>
        </div>
    )

}

export default DogListElement