import mongoose from "mongoose";
import { type } from "node:os";
import { date } from "zod";

const seriesExecutadas = new mongoose.Schema({
    Peso:{
        type:Number,
        required:true
    },
     Repeticao:{
        type:Number,
        required:true
    }
},{_id:false})

const modelListingSchema = new mongoose.Schema({
    Exercicio:{
        type:String,
        required:true
    },
    Tipo:{
        type:String,
        required:true
    },
     Data:{
        type:Date,
        default:Date.now
    },
    Series:{
        type:[seriesExecutadas],
        required:true
    }


})

export default mongoose.model("modelListing", modelListingSchema);