import axios from 'axios';

const baseURL = "http://localhost:5000/api"; 

const getAllToDo = (setToDo) => {
  axios
    .get(`${baseURL}`) 
    .then(({ data }) => {
      console.log('data --->', data);
      setToDo(data);
    })
    .catch((error) => {
      console.error('Error fetching items:', error);
    });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseURL}/save`, { text }) 
    .then((data) => {
      console.log(data);
      setText(""); 
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error('Error adding task:', error);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseURL}/update/${toDoId}`, { text })
    .then((data) => {
      console.log(data);
      setText(""); 
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error('Error updating task:', error);
    });
};

const deleteToDo = (toDoId, setToDo) => {
  axios
    .delete(`${baseURL}/delete/${toDoId}`)
    .then(() => {
      console.log('Deleted Successfully');
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error('Error deleting task:', error);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
