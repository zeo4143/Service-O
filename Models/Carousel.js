import { Schema, model } from "mongoose";


const carousel = new Schema(
    {
        images : [String]
    }
)

export const Carousel = model("Carousel", carousel)