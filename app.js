import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World joshua.nk!!')
})

app.listen(port, () => {
  console.log(`Entra al siguiente puerto http://localhost:${port}/`)
})