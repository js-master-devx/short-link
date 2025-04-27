import { NextFunction, Request, Response } from "express";



export const errorHandler=(err:any, _:Request, res:Response, next:NextFunction)=>{

    console.error(err)
    const statucCode =  err.statucCode || 500

    const message =  err.message || 'Internal Server Error'

    res.status(statucCode).json({
        message
    })

    
    
}