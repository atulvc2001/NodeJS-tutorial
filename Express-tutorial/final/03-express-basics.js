
const express = require('express');
const app = express()

app.listen(5000,() => {
  console.log('server is listening on port 5000')
})


app.get('/',(req,res)=>{
  console.log("user hit the resource home")
  res.send('Home Page')
})

app.get('/about',(req, res) => {
  res.status(200).send("about Page")
})

app.get('*',(req, res) => {
  res.status(404).send("page not found")
})

// * The below code is the code john smilga already did, and the above code is me just practising them again

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   console.log('user hit the resource')
//   res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//   res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000...')
// })

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
