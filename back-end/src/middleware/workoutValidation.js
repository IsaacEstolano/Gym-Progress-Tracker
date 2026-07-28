import {coerce, z} from "zod";

const seriesSchema=z.object({
    Repeticao:z.coerce.number().int().positive(),
    Peso:z.coerce.number().positive(),
})

const validationSchema = z.object({
    Exercicio:z.string().min(5).max(40),
    Tipo:z.string().min(5).max(40),
    Series:z.array(seriesSchema).min(1),
    Data:z.coerce.date()
})

const updatedValidationSchema=validationSchema.partial();

export const workoutValidation=(req,res,next)=>{
    try{
        validationSchema.parse(req.body);
        next();
    }
    catch(error){
        next(error)
    }
}
export const updateWworkoutValidation=(req,res,next)=>{
    try{
        updatedValidationSchema.parse(req.body);
        next();
    }
    catch(error){
        next(error)
    }
}