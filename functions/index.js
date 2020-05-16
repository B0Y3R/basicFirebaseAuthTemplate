const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    editTodo,
    deleteTodo,
    getAllTodos,
    postOneTodo,
} = require('./api/todos');

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
} = require('./api/users')

//Todos
app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.put('/todo/:todoId', editTodo);
app.delete('/todo/:todoId', deleteTodo);

//Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);

exports.api = functions.https.onRequest(app);