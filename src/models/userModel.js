const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        firstName :{
            type:String,
            required: true
        },
        lastName:{
            type:String,
            required: true
        },

    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("users", userSchema)
module.exports = ModelUser;