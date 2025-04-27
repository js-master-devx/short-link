import mongoose, { Document, Schema } from "mongoose"



export interface ILink extends Document {
    id:string
    originalUrl: string
    shortUrl: string
}


const linkSchema: Schema = new Schema({
    id: {type:String, required:true},
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true }
})

export const LinkModel = mongoose.model<ILink>('Link', linkSchema)