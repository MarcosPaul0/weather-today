import { router } from './routes'
const cors = require('cors')
const express = require('express');

const app = express();

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(3333, () => console.log('Server is Running!'))