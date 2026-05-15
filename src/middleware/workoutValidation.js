import {coerce, z} from "zod";

const validationSchema = z.object({
    Exercicio:z.string().min(5).max(40),
    Tipo:z.string().min(5).max(40),
    Repeticao:z.coerce.number().int().positive(),
    Series:z.coerce.number().int().positive(),
    Peso:z.coerce.number().positive(),
    Data:z.date()
})

export const workoutValidation=(req,res,next)=>{
    try{
        validationSchema.parse(req.body);
        next();
    }
    catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}