require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors');
const router = require('./routes/routes')

const PORT = process.env.PORT_API || 8001

app.use(cors());
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log('server listening to port ' + PORT);
})