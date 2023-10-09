alert('Hello friends, lets make schedules using this TodoList. Thanks')

let todoList = JSON.parse(localStorage.getItem("todoList")) || [{
    name:'Raheem Created Todo List',
    dueDate: '2023-09-29T00:00'},{
        name: 'Example: Chelsea Game',
        dueDate: '2023-09-29T22:15'}
    ];
/*
const todoList = [{
    name:'Raheem Created Todo List',
    dueDate: '2023-09-29T00:00'},{
        name: 'Example: Chelsea Game',
        dueDate: '2023-09-29T22:15'}
    ];*/

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
// GENERATING THE HTML
    for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  " class="delete-todo-button">Delete</button>      
    `;
    todoListHTML += html;
    }
   // console.log(todoListHTML);
   localStorage.setItem("todoList", JSON.stringify(todoList));

    document.querySelector('.js-todo-List')
    .innerHTML = todoListHTML;
};

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-Date-input');
    const dueDate = dateInputElement.value;

   /* todoList.push({
        name:name,
        dueDate:dueDate});*/
    todoList.push({
        name,            // Short Hand Property 
        dueDate
    });

    //console.log(todoList);

    inputElement.value = '';
    
    renderTodoList();
}