 const {Schema, model} = require("../connection")

 const myschema = new Schema({
    
    title: String,
    description: String,
    image: String,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },

 });

 module.exports = model("publish", myschema);