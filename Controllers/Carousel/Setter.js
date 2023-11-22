import { Carousel } from "../../Models/Carousel.js"


const updateImage = async (req, res) => {
    try {
        const data = req.body
        data.images = req.files.map(file => file.filename)

        const images = new Carousel(data)
        const updatedCarousel = await images.save()

        res.status(200).json(updatedCarousel)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export {updateImage}