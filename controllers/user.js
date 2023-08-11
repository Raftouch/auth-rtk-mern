const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../utils/generateToken')

// route     POST /api/users/auth
const auth = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      res.status(401)
      throw new Error('Invalid credentials')
    }

    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// route     POST /api/users
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// route     POST /api/users/logout
const logout = asyncHandler(async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  })

  res.status(200).json({ message: 'User logged out' })
})

// route     GET /api/users/profile
const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile' })
})

// route     PUT /api/users/profile
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' })
})

module.exports = { auth, register, logout, getProfile, updateProfile }
