// load app server using express
const express = require('express')
const buzzwords = require('buzzwords')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))


app.get("/", (req, res) => {

  console.log("Responding to route")

  res.sendFile('main_page.html', {
    root: __dirname
  });


})

app.get("/users", (req, res) => {

  console.log("Got a users GET request. Answering..")
  const user1 = {
    firstName: "Jason",
    lastName: "Bourne"
  }
  const user2 = {
    firstName: "Bobby",
    lastName: "Brown"
  }
  const user3 = {
    firstName: "James",
    lastName: "Hetfield"
  }
  const user4 = {
    firstName: "Fornalio",
    lastName: "Fornaroli"
  }
  res.json([user1, user2, user3, user4])

})


// localhost:3003
app.listen(3003, () => {
  console.log("Starting listening to port 3003")
})
