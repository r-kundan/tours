// ye vaildation ka kaam kr rha h listing schema pr jo models ke ander h
const Joi = require("joi")

module.exports.toursSchema = Joi.object({
tour:Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("",null),
    map: Joi.string().allow("",null),
}).required()
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment:Joi.string().required()

    }).required()
})