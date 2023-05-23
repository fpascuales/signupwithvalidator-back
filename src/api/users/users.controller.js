const User = require("./users.model");

const singUp = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        // console.log(newUser);
        console.log(`Password 1: ${req.body.password}`);
        console.log(`Password 2: ${req.body.password2}`);
        // await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    singUp
}