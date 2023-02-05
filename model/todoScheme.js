const mongoose = require('mongoose')
const todoScheme = mongoose.Schema({
  todo: {
    type: String,
  },
  create_to: {
    type: Date,
    default: Date.now(),
  },
})

const TodoModel = mongoose.model('todo', todoScheme)

module.exports = TodoModel
