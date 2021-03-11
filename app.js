// Selectors


const todoInput =  document.querySelector('.todo-input')
const todoButton =  document.querySelector('.todo-button')
const todoList =  document.querySelector('.todo-list')

// Event Listener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addToDo(event){
    
    //  Prevents form from submitting
    event.preventDefault()

    // ToDo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li

    const newToDo =  document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    //complete button

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //Trash button

    const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class ="far fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    // Clear ToDo input value
 
    todoInput.value="";

}


function deleteCheck(event){
    const item = event.target;

    // Delete To Do
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation of drop
        todo.classList.add("fall");
    //  todo.remove();
        // Do not want to simply disappear the completed ToDO
        todo.addEventListener('transitioned', function(){
            todo.remove();
        })
    }


    // Check Mark

    if(item.classList[0] === "complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

} 