const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    ToDoModel.create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
        .catch((err) => console.log(err)); 
};

module.exports.updateMode = async (req, res) => {
    const { text } = req.body;
    const { id } = req.params; // get id from params instead of body
    
    try {
        await ToDoModel.findByIdAndUpdate(id, { text });
        res.send("Updated Successfully...");
    } catch (err) {
        console.error('Error updating todo:', err);
        res.status(500).send("Error updating todo");
    }
};


module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params; // Use req.params instead of req.body
    try {
        await ToDoModel.findByIdAndDelete(id);
        console.log(`Task with ID ${id} deleted successfully.`);
        res.send("Deleted Successfully");
    } catch (err) {
        console.error('Error deleting todo:', err);
        res.status(500).send("Error deleting todo");
    }
};


