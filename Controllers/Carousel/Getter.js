import { Carousel } from "../../Models/Carousel.js"


const getImages = async (req, res) => {   
    try {

        const response = await Carousel.find()

        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

export {getImages}