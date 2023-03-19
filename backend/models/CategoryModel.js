const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    name:{type : String, require : true, unique : true},
    description : {type : String, default : 'default category description'},
    image:{type: String, default:'/image/tablets-category.png'},
    attrs : [
        {
            key:{type: String},
            value:[{type :String}]
        }
    ]
})
const Category = mongoose.model("Category", CategorySchema)
module.exports = Category