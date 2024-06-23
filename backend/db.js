/*

todo{
title:string;
description:string;
completed:boolean;
}

*/


const mongoose = require("mongoose");
// mongodb+srv://rakshika2580:NJTzkixb0lxlLyJu@cluster0.8gkk0pj.mongodb.net/
//.env
mongoose.connect("mongodb+srv://rakshika2580:NJTzkixb0lxlLyJu@cluster0.8gkk0pj.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}
