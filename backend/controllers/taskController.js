const Task = require('../model/taskModel')

// create a task
const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        // console.log(req.body)
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

// get all tasks
const getTasks = async (req, res) => {
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

// get a single task
const getTask = async (req, res) => {
    // console.log(req.params) // { id: 673562f29d1083569c341746 }
    // res.send("Get single task")
    try {
        // destructurize
        const { id } = req.params
        const task = await Task.findById(id)
        
        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).json(task)        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// delete a task
const deleteTask = async (req, res) => {
    
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)

        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).send('Task Deleted')
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// update a task (put)
const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        // runValidators: checks the database if the value of property being updated is empty
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body, {new:true, runValidators:true,}
        )

        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// update a task (patch)
const updateATask = async (req, res) => {
    try {
        const {id} = req.params
        // runValidators: checks the database if the value of property being updated is empty
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body, {new:true, runValidators:true,}
        )

        // if id does not exist
        if(!task){
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports = {createTask, getTasks, getTask, deleteTask, updateTask, updateATask}