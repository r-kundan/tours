const express = require("express")
const router = express.Router({mergeParams:true});
const {reviewSchema}=  require("../schema.js")
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js")
const Tour = require("../models/tours.js")



const validateReview= (req,res,next)=>{
    let {error} =  reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg)
    }else{
        next()
    }
}

//post review route
router.post("/",validateReview,wrapAsync(async(req,res)=>{
    let tour = await Tour.findById(req.params.id)
    let newReview = new Review(req.body.review);
    
    tour.reviews.push(newReview);
    await newReview.save();
    await tour.save();
    res.redirect(`/tours/${tour._id}`)
    }));
    //Delete review Route
    router.delete("/:reviewId",wrapAsync(async(req,res)=>{
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/tours/${id}`)
    }));
    
    module.exports = router;