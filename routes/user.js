const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth')
const {
  auth,
  register,
  logout,
  getProfile,
  updateProfile,
} = require('../controllers/user')

router.post('/auth', auth)
router.post('/', register)
router.post('/logout', logout)
router.get('/profile', protect, getProfile)
router.put('/profile', protect, updateProfile)

module.exports = router
