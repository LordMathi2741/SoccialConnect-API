const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
       content:{
          type: String,
          required: true
       },
       user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: './userModel.js'
       },
       likes : {
           type: Number,
       },
       video_url : {
         type: String
       },
       img_url : {
         type: String,
         required: true
       }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ProfileModel = mongoose.model("profiles",profileSchema)
module.exports = ProfileModel;