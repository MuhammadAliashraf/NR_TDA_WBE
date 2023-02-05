var express = require('express')
const TodoControl = require('../Controllar/todo')
var router = express.Router()

// router.get('/api/fakeproduct', (request, response) => {
//   response.json({
//     message: 'HOgya Bhai',
//     status: true,
//     products: [{ name: 'laptop' }, { name: 'Mouse' }, { name: 'Computer' }],
//   })
// })

router.post('/api/todo', TodoControl.createtodo)

router.get('/api/todo', TodoControl.gettodo)

router.delete('/api/todo/:id', TodoControl.deletetodo)

router.put('/api/todo/', TodoControl.updatetodo)

module.exports = router
