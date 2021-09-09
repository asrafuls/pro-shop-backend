import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (email.length > 0 && password.length > 0) {
        const user = await User.findOne({ email })

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(401)
            throw new Error("Invalid email or password")
        }
    } else {
        res.status(401)
        throw new Error("Email and password is required")
    }
})



// @desc    Register a new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (name.length > 0 && email.length > 0 && password.length > 0) {
        const userExist = await User.findOne({ email })

        if (userExist) {
            res.status(400)
            throw new Error("User Already Exist. Please login")
        }

        const user = await User.create({
            name,
            email,
            password
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(404)
            throw new Error("User data invalid")
        }
    } else {
        console.log(req.body.name, req.body.email, req.body.password)
        res.status(401)
        throw new Error("Name Email and Password is required")
    }
})


// @desc    Get user & get token
// @route   GET /api/users/profile
// @access  Privet
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

export {
    authUser,
    registerUser,
    getUserProfile
}