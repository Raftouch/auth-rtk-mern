const asyncHandler = require('express-async-handler')

// route     POST /api/users/auth
// @access   Public
const auth = asyncHandler(async (req, res) => {
  //   res.status(401)
  //   throw new Error('Something went wrong')

  res.status(200).json({ message: 'Auth User' })
})

module.exports = { auth }
