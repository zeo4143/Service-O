import express from "express";
import cors from "cors"
import {} from "dotenv/config.js"
import { connect } from "mongoose";
import { Carousel } from "./Routes/Carousel.js";


//Variables
const app = express()
const PORT = process.env.PORT || 8080
const URI = process.env.MONGO_URI
const path = process.cwd() + '/LocalServer'

//cors
app.use(cors())
app.use(express.json())


//Static Routes
app.use('/images', express.static(path))

//Routes(end Points)
Carousel(app)



//Server
connect(URI).then(() =>  {
    console.log("connnected to DB");

    app.listen(PORT, (error) => {
        error ? console.log(error) : console.log(`Server Listenig on ${PORT}`)
    })
})