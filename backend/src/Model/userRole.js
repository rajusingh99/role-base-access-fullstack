const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");

const userRoleSchema = mongoose.Schema({
    _id: {type: String, default: uuidv4},
    roleId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('UserRole',userRoleSchema);
