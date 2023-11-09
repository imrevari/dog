const express = require('express')
const app = express()

const dogs = require('./dogs.json') 
const router = express.Router()

let localDogs = [...dogs]




router.get('/', (req, res) => {
    res.send(localDogs)
})

router.post('/', (req, res) => {
    let newDog = req.params.body

    const latDog = localDogs[localDogs.length - 1]
    newDog.id = parseInt(latDog.id) + 1
    localDogs = [...localDogs, newDog]
    res.send(localDogs)
})

router.put('/:id', (req, res) => {
    const paramId = req.params.id;
    let updatedDog = req.params.body
    const dogToUpdate = localDogs.find( ({id}) => id == paramId)
    updatedDog = {...updatedDog, id: parseInt(dogToUpdate.id)}
    
    const index = localDogs.indexOf(dogToUpdate);
    localDogs[index] = updatedDog

    res.send(localDogs)
})

router.delete('/:id', (req, res) => {
    const paramId = req.params.id;
    const dogToDelete = localDogs.find( ({id}) => id == paramId)
    const index = localDogs.indexOf(dogToDelete);
    if (index !== -1) {
        localDogs.splice(index, 1);
    }
    res.send(localDogs)
})

module.exports = router