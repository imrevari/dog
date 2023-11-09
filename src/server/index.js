const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())

const dogsRouter = require('./dogsRouter')
app.use('/api', dogsRouter)


app.listen(3001, () => console.log('Server Started'))