const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false, // Default value as false for new tasks
    },
});

const ToDoModel = mongoose.model('ToDo', ToDoSchema);
module.exports = ToDoModel;
