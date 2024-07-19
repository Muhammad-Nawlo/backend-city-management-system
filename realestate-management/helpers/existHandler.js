import NotFoundError from "../errors/notFoundError.js";
import mongoose from "mongoose";

export default async function (model, id) {
    const res = await model.findById(new mongoose.Types.ObjectId(id));
    if (!res) {
        throw new NotFoundError();
    }
}