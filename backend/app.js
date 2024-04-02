const express = require("express")
const app = express()
const mongoose = require("mongoose")
const MONGO_URL = "mongodb://127.0.0.1:27017/toursplanning"
const path = require("path"); 
const ExpressError = require("./utils/ExpressError.js")
const tourRouter = require("./routes/tour.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")
const logRouter = require("./routes/login.js")
const cors = require("cors")





main().then(()=>{
    console.log("connected to DB")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.use(cors());

app.use("/api/tours",tourRouter);
app.use("/api/tours/:id/reviews",reviewRouter)

app.use("/api/tours/user",userRouter)

app.use("/api/tours/login",logRouter)


app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"page not found!"))
})


app.listen(8000,()=>{
    console.log("server is tours to part 8000")
})


