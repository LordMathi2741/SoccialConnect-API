const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema(
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

const PublicationModel = mongoose.model("publication",publicationSchema)
module.exports = PublicationModel;