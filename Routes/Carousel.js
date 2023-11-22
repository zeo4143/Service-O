import { getImages } from "../Controllers/Carousel/Getter.js"
import { updateImage } from "../Controllers/Carousel/Setter.js"
import { images } from "../MiddleWares/multer.js"


const Carousel = (routes) => {

    //GET
    routes.get("/carousel", getImages)

    //POST
    routes.post("/carousel/post", images.array('images', 3), updateImage)

}

export {Carousel}