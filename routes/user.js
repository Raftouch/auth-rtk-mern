const express = require('express')
const router = express.Router()
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
router.route('/profile').get(getProfile).put(updateProfile)

module.exports = router
