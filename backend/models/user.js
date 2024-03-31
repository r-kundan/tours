const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")


const userSchema = new Schema ({
    email:{
        type:String,
        required: true,
    }
})

userSchema.plugin(passportLocalMongoose);
// plugin esliye use kiya kiyo ki ye hamare liye
// salting, username, hashing and hashpassword automatically li apply kr deta h 



module.exports = mongoose.model("User",userSchema)