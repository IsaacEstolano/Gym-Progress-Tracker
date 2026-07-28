export const errorHandler=(error,req,res,next)=>{
    res.status(500).json({
        message:"Erro interno",
        error:error.message
    })
}