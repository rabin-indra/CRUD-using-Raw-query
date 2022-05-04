const express = require('express')

// Initialize express
const app = express()

// parse json objects
app.use(express.json()) 

// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true})) 

app.get('/', (req, res)=> {
    res.json({ message: "Welcome to the world." });
})

//require employee Routes
const employeeRoutes = require("./src/routes/employee.routes")

//using middleware
app.use('/api', employeeRoutes);

// create a server
let PORT =3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});