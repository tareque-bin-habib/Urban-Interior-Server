const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000


// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Urban Interior Server Running')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port} `)
})