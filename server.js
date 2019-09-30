const express = require('express')
const connectDatabase = require('./config/db')

const app = express()

// Connect database
connectDatabase()

// Init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({
  message: 'Hello World to the Contact Keeper API!'
}))

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`))