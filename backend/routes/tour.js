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
router.get("/alltours",wrapAsync(async (req,res)=>{
    const alltours = await Tours.find({})
   setTimeout(()=>{
    res.send(alltours)
   },1000)
 }))



 // show route 
 router.get("/:id",wrapAsync(async (req,res)=>{
     let {id} = req.params;
     try {
        const tourDetail = await Tours.findById(id);
        console.log(tourDetail)
        if(!tourDetail){
           return res.status(404).json({ error: "Tour not found" });
        }
        setTimeout(()=>{
           res.json(tourDetail);
          },1000)
     } catch (error) {
        console.error("Error fetching tour detail:", error);
        res.status(500).json({ error: "Internal server error" });
  
     }
   
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



 //update Route
 router.put("/api/tours/:id/edit",isLoggedIn,
 validateListing,
 wrapAsync(async (req,res)=>{
     let {id} = req.params
     const { title, description, image, location, country, map } = req.body;
     await Tours.findByIdAndUpdate( title, description, image, location, country, map )
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