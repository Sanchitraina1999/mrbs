import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateTokens.js'

//@desc Auth a User & get a taken
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc Create a new User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }
    else {
        const user = await User.create({
            username,
            email,
            password
        })
        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid Data')
        }
    }
})

//@desc Get user profile
//@route POST /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            token: generateToken(updatedUser._id)
        })
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Get user exists
//@route POST /api/users/profileByEmail
//@access Private
const getUserExists = asyncHandler(async (req, res) => {
    const { email } = req.body
    console.log(email)
    const user = await User.findOne({email})
    console.log(user)
    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})

export { authUser, registerUser, getUserProfile, updateUserProfile,getUserExists }