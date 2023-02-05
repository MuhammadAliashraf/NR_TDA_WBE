const TodoModel = require("../model/todoScheme")

const TodoControl = {

  gettodo: (request, response) => {
    TodoModel.find({}, (error, data) => {
      if (error) {
        response.json({
          message: 'No Data Found!',
          status: false,
        })
      } else {
        response.json({
          message: 'Data Get',
          status: true,
          data: data,
        })
      }
    })
  },
  createtodo: (request, response) => {
    const body = request.body
    // if textfeild in empty this code handel
    if (!body.todo) {
      response.json({
        message: 'Todo Require',
        status: false,
      })
      return
    }

    const objectotsend = {
      todo: body.todo,
    }
    TodoModel.create(objectotsend, (error, data) => {
      if (error) {
        response.json({
          message: 'Internal Errro',
          status: false,
        })
      } else {
        response.json({
          message: 'Item Added!',
          status: true,
          // data:data,
        })
      }
    })
  },
  deletetodo: (request, response) => {
    const { id } = request.params
    TodoModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        response.json({
          message: 'Internal Error Found',
          status: false,
        })
      } else {
        response.json({
          message: 'Todo Delete Successfully!',
          status: true,
        })
      }
    })
  },
  updatetodo: (request, response) => {
    const body = request.body
    console.log(body)

    if (!body.todo) {
      response.json({
        message: 'Todo Require',
        status: false,
      })
      return
    }

    const objectotsend = {
      todo: body.todo,
    }
    TodoModel.findByIdAndUpdate(body.id, objectotsend, (error, data) => {
      if (error) {
        response.json({
          message: 'Internal Errro',
          status: false,
        })
      } else {
        response.json({
          message: 'Item updated!',
          status: true,
          // data:data,
        })
      }
    })
  },
}

module.exports = TodoControl
