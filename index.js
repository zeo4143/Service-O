import express from "express";
import cors from "cors"
import {} from "dotenv/config.js"


//Variables
const app = express()
const PORT = process.env.PORT || 8080
const path = process.cwd() + '/LocalServer'

//cors
app.use(cors())
app.use(express.json())


//Routes
app.use('/images', express.static(path))



//Server
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server Listenig on ${PORT}`)
})