const express = require("express")
const app = express()
const mongoose = require("mongoose")
const MONGO_URL = "mongodb://127.0.0.1:27017/toursplanning"
const path = require("path"); 
// const methodOverride = require("method-override")
const ExpressError = require("./utils/ExpressError.js")
const tourRouter = require("./routes/tour.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")


const session = require("express-session")
const flash = require("connect-flash")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js")


main().then(()=>{
    console.log("connected to DB")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}


// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
// app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"/public")))

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 *1000,
        httpOnly:true,
         }

}


app.get("/",(req,res)=>{
    res.send("hi ,I am root")
})

app.use(session(sessionOptions));
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currentUser = req.user;
    next()
})



app.use("/tours",tourRouter);
app.use("/tours/:id/reviews",reviewRouter)
app.use("/",userRouter)

app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"page not found!"))
})

app.use((err,req,res,next)=>{
    let {statusCode=500 , message="something went wrong"} = err;
    // res.render("error.ejs",{err})
    res.status(statusCode).render("error.ejs",{err})
next()
})

app.listen(8080,()=>{
    console.log("server is tours to part 8080")
})


