const express = require('express')
const { check, validationResult } = require('express-validator')

const auth = require('../middleware/auth')
const Contact = require('../models/Contact')
const User = require('../models/User')

const router = express.Router()


// @route   GET  api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ created_at: -1 })
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route   POST  api/contacts
// @desc    Add a new contact
// @access  Private
router.post('/', [auth, [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email must be valid').isEmail()
]], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const { name, email, phone, type } = req.body

  try {
    const newContact = new Contact ({
      user: req.user.id,
      name,
      email,
      phone,
      type,
    })

    const contact = await newContact.save()

    res.json(contact)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route   PUT  api/contacts/:id
// @desc    Edit a contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body

  const contactFields = {}
  if(name) contactFields.name = name
  if(email) contactFields.email = email
  if(phone) contactFields.phone = phone
  if(type) contactFields.type = type

  try {
    let contact = await Contact.findById(req.params.id)
    
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    console.log(contact)

    if(contact.user.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' })

    contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true })

    res.json(contact)
  
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route   DELETE  api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ message: 'Unauthorized' })

    await Contact.findByIdAndRemove(req.params.id)

    res.json({ message: 'Contact successfully deleted' })

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

module.exports = router
