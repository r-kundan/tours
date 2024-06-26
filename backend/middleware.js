module.exports.isLoggedIn = (req,res,next)=>{
        //isAuthenticated check user loged in or not
        if(!req.isAuthenticated()){
                req.session.redirectUrl = req.originalUrl
            req.flash("error","you must be logged in to create listing")
           return res.redirect("/login")
        }
        next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
        if(req.session.redirectUrl){
                res.locals.redirectUrl = req.session.redirectUrl;
        }
        next()
}