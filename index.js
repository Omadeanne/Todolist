// CRUD TODO FUNCTION 
// Utility function
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0,
        v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

// CREATE TODO FUNCTION
/* 
  1. get todo from user input
  2. add todo to local storage

   to store in a local storage stringify the data using Json.stringify 
 then store in local storage using localstorage.setItem('key',data you're storing)

 to retrieve from local storage you the synthax
 1. localStorage.getItem('key'), then store in varaiable for later use
 2. convert the data stored back to js object or array using JSON.parse(data) for use
*/
const createTodo = (event) => {
    event.preventDefault()
    const todoInput = document.getElementById('todo-input');
    const todoValue = todoInput.value;
// retrieve the item
    const todoDb = JSON.parse(localStorage.getItem("todoList")) || []
const newTodo = {
    todo: todoValue,
    id: uuid(),
    createdAt: Date.now()
}
//store new todo in the dbase
todoDb.push(newTodo);
// store back in the db
localStorage.setItem("todoList",JSON.stringify(todoDb));



}



// READ TODO FUNCTION

// UPDATE TODO FUNCTION

// DELETE TODO FUNCTION