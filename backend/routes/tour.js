const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const {toursSchema}=  require("../schema.js")
const Tours = require("../models/tours.js")
 const { isLoggedIn } = require("../middleware.js")


const validateListing = (req,res,next)=>{
    let {error} =  toursSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next()
    }
}

// index Route 
router.get("/",wrapAsync(async (req,res)=>{
    const alltours = await Tours.find({})
     res.render("listings/index.ejs",{alltours})
 }))
 //New Route
 router.get("/new",isLoggedIn,(req,res)=>{

     res.render("listings/new.ejs")
 })
 // show route 
 router.get("/:id",wrapAsync(async (req,res)=>{
     let {id} = req.params;
     const tour = await Tours.findById(id).populate("reviews");
     if(!tour){
        req.flash("error","Tours you requested for does not exist")
        res.redirect("/tours")
     }
     res.render("listings/show.ejs",{tour})
 }))
 //create route
 router.post("/",isLoggedIn,
 validateListing
 ,wrapAsync(async (req,res,next)=>{
     const newTour = new Tours(req.body.listing);
 await newTour.save()
 req.flash("success", "New listing created")
 res.redirect("/tours")
 
 }))
 //edit route
 router.get("/:id/edit",isLoggedIn, wrapAsync(async (req,res)=>{
 let {id}= req.params
 const tour = await Tours.findById(id)
 if(!tour){
    req.flash("error","Tours you requested for does not exist")
    res.redirect("/tours")
 }
 res.render("listings/edit.ejs",{tour})
 }))

 //update Route
 router.put("/:id",isLoggedIn,
 validateListing,
 wrapAsync(async (req,res)=>{
     let {id} = req.params
     await Tours.findByIdAndUpdate(id,{...req.body.tour})
     req.flash("success","Listing Updated!")
     res.redirect(`/tours/${id}`)
 }))
 //delete route
 router.delete("/:id",wrapAsync(async(req,res)=>{
     let {id} = req.params 
     await Tours.findByIdAndDelete(id)
     res.redirect("/tours")
 }))
 module.exports = router;