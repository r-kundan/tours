const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Review = require("./review.js")

const tourSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default:
            "https://source.unsplash.com/random",
         set: (v) => v === "" ? "https://source.unsplash.com/uWpggIb3iHs" : v
    } ,
   map:{
    type : String,
     default:
    "https://www.google.com/maps",
  set: (v) => v === "" ? "https://www.google.com/maps" : v

   },
    location: String,
    country: String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        }
    ],

})

tourSchema.post("findOneAndDelete",async(tour)=>{
if(tour){
    await Review.deleteMany({_id :{$in: tour.reviews}})
}
})

const Tours = mongoose.model("Tours",tourSchema)
module.exports = Tours;