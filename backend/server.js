// npm i dotenv
// install dotenv module to create .env file to store the authentication string from MONGODB. The authentication string will help us connect our application in MONGODB cloud database. 

// to connect to mongoDB, install `npm i mongoose`

// to give this app permission to access .env file
const dotenv = require('dotenv').config()

const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const Task = require('./model/taskModel')
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')

// method #2 to connect to mongoDB
const mongoose = require('mongoose')

// middleware - a function that has access to request function, response function and next function of request-access cycle
app.use(express.json()) // for json

// for urlencoded
// app.use(express.urlencoded({extended:false})) 

// this middleware is use to solve problems regarding CORS issue of sending data between frontend and backend
app.use(cors({
    origin:["http://localhost:3000/", "https://mern-task-manager-6u93.onrender.com"] // database can now accepts data from this url lists
}))

/* 
    if you leave this middleware set up like this, it will now accept request from any url 
    DON'T FORGET TO INSTALL `npm i cors` BEFORE USING IT
    PLACE THIS CODE ABOVE ANY TASKROUTES
*/
// app.use(cors())

// read all lines inside taskRoute.js
// app.use(taskRoutes) // refactoring...
app.use("/api/tasks", taskRoutes) 

/* middleware
const logger = (req, res, nxt) => {
    console.log('Middleware activated')
    console.log(req.method)
    nxt()
}
*/

// routes
app.get('/', (req,res) => {
    res.send('<h1>Home page</h1>')
})

// create a task
/* route with middleware `logger`
app.post('/api/tasks', logger, async (req, res) => {
    console.log(req.body)
    res.send("Task Created")
})
*/

// process.env.PORT is the default port when this application deploy in live server
const PORT = process.env.PORT || 5000

// method #2 to connect to mongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then( () => {
        // create server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => console.log(error))

/** method #1 to connect to mongoDB
    const startServer = async() => {
        try {
            // when running the application it is prefered to connect to the database first before creating its own server to avoid future error like requesting data to database
            await connectDB()

            // routes
            app.get('/', (req,res) => {
                res.send('<h1>Home page</h1>')
            })

            // create server
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`)
            })

        }catch(error) {
            console.log(error)
        }
    }

    startServer()
 */


 