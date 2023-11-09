const express = require('express')
const app = express()

const dogs = require('./dogs.json') 
const router = express.Router()

let localDogs = [...dogs]




router.get('/', (req, res) => {
    res.send(localDogs)
})

router.post('/:id', (req, res) => {
    res.send(localDogs)
})

router.put('/:id', (req, res) => {
    res.send(localDogs)
})

router.get('/delete/:id', (req, res) => {
    const paramId = req.params.id;
    const dogToDelete = localDogs.find( ({id}) => id == paramId)
    const index = localDogs.indexOf(dogToDelete);
    if (index !== -1) {
        localDogs.splice(index, 1);
    }
    res.send(localDogs)
})

module.exports = router