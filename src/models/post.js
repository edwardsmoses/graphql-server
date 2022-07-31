import mongoose from "mongoose";


const Schema = mongoose.Schema;

const postSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
}, {timestamps: true})

export const postModel = mongoose.model("Post", postSchema);