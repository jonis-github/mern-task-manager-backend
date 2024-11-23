const express = require('express')
const Task = require('../model/taskModel')
const router = express.Router()
const {createTask, getTasks, getTask, deleteTask, updateTask, updateATask} = require('../controllers/taskController')

/* refactoring...
// create task
router.post('/api/tasks', createTask)

// get/read all tasks
router.get('/api/tasks', getTasks)

// get/read a single task
router.get('/api/tasks/:id', getTask)

// delete task
router.delete('/api/tasks/:id', deleteTask)

// update task - put method need to update all properties
router.put('/api/tasks/:id', updateTask)

// update task - patch method you can update a single property
// router.patch('/api/tasks/:id', updateATask)
*/


// create task
// router.post('/api/tasks', createTask)
router.post('/', createTask)

// get/read all tasks
// router.get('/api/tasks', getTasks)
router.get('/', getTasks)

// get/read a single task
// router.get('/api/tasks/:id', getTask)
router.get('/:id', getTask)

// delete task
// router.delete('/api/tasks/:id', deleteTask)
router.delete('/:id', deleteTask)

// update task - put method need to update all properties
// router.put('/api/tasks/:id', updateTask)
router.put('/:id', updateTask)

// update task - patch method you can update a single property
// router.patch('/api/tasks/:id', updateATask)
// router.patch('/:id', updateATask)


// same function as above codes
// router.route('/').post(createTask).get(getTasks)
// router.route('/:id').get(getTask).delete(deleteTask).put(updateTask)

/*
// create a task
router.post('/api/tasks', async (req, res) => {
    // console.log(req.body)
    // res.send("Task Created")

    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
})

// get/read task
router.get('/api/tasks', async (req, res) => {
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
})
*/

/* not working; must use express router
const app = express()

app.post('/api/tasks', async (req, res) => {
    // console.log(req.body)
    // res.send("Task Created")

    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
})

app.get('/api/tasks', async (req, res) => {
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
})
*/

module.exports = router