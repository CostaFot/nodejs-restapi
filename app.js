// load app server using express
const express = require('express')
const app = express()

app.get("/", (req, res) => {

  console.log("Responding to route")
  res.send("Hello from me")

})

// localhost:3003
app.listen(3003, () => {
  console.log("Starting listening to port 3003")
})
