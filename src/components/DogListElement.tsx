
import { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import PetsIcon from '@mui/icons-material/Pets';

import { Dog } from "../interfaces/interfaces"


interface DogsListElementProp {
    name: string,
    sex: string,
    id: number
}


const DogListElement = ( {name, sex} : DogsListElementProp) => {

    return(
        <div>
            <ListItem>
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