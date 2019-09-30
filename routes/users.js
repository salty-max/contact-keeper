const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

const router = express.Router()

const User = require('../models/User')

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post('/', [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Email must be valid').isEmail(),
  check('password', 'Password must contain at least 6 characters').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() })

  const { username, email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user)
      return res.status(400).json({ message: 'User already exists' })
    
    user = new User({
      username,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    res.send('User saved')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
