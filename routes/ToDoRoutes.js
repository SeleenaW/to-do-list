const {Router} = require("express");
const { getToDo, saveToDo, deleteToDo, updateMode, toggleComplete } = require("../controllers/ToDoController")

const router = Router()
router.get('/', getToDo)
router.post('/save', saveToDo)
router.put('/update/:id', updateMode);
router.delete('/delete/:id', deleteToDo);
// router.put('/toggleComplete', toggleComplete)


module.exports = router;
