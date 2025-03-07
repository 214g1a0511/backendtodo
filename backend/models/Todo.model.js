const mongoose=require("mongoose")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    status:String,

},{timestamps:true})

const todoModel=mongoose.model("todos",todoSchema)
module.exports={todoModel}