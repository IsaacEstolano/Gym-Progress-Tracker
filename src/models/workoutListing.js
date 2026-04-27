import mongoose from "mongoose";

const modelListingSchema = new mongoose.Schema({
    Exercicio:String,
    Tipo:String,
    Repeticao:Number,
    Series:Number,
    Peso:Number,
    Data:Date

})

export default mongoose.model("modelListing", modelListingSchema);