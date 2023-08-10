const asyncHandler = require('express-async-handler')

// route     POST /api/users/auth
// @access   Public
const auth = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' })
})

// route     POST /api/users
// @access   Public
const register = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register User' })
})

// route     POST /api/users/logout
// @access   Public
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' })
})

// route     GET /api/users/profile
// @access   Private
const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile' })
})

// route     PUT /api/users/profile
// @access   Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' })
})

module.exports = { auth, register, logout, getProfile, updateProfile }
