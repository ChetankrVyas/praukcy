const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/form', require('./routes/form'))
app.listen(port, () => {
  console.log(`Praukcy backend listening at http://localhost:${port}`)
})