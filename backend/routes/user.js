const router = require("express").Router();
const { User, validate } = require("../models/user.js");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
	try {
		const { error } = validate(req.body);
		console.log("Request body:", req.body); 
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser){
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" })};

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			userName: req.body.userName,
            email: req.body.email,
            password: hashPassword
        });
        await newUser.save()
		.then(()=>{
			res.status(201).json({
				message:"user registered successfuly"
			}).catch((err)=>res.status(500).json({err:"failed to rgister"}))
		})

		
	} catch (error) {
		console.error("Error creating user:", error);
        res.status(500).send({ message: "Internal Server Error" });

	}
});

module.exports = router;