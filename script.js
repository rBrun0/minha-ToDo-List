let toDoContainer = document.getElementById('toDoContainer')
let toDoForm = document.getElementById('toDoForm')
let inputTodo = document.getElementById('inputToDo')
let inputTask = document.getElementById('inputTask')
let inputCriar = document.getElementById('inputCriar')
let doneBtn = document.getElementById('doneBtn')
let removeBtn = document.getElementById('removeBtn')
let task = document.getElementById('task')
let taskList = document.getElementById("taskList")



const saveTask = (text) =>{

    let todo = document.createElement("div");
    todo.classList.add("taskList");
    let taskTitle = document.createElement("h4");
    taskTitle.innerText = text;
    todo.appendChild(taskTitle)

    task.appendChild(todo)

    let complete = document.createElement("button")
    complete.classList.add("doneBtn")
    complete.innerText = "OK"
    todo.appendChild(complete)

    let remove = document.createElement("button")
    remove.classList.add("removeBtn")
    remove.innerText = "X"
    todo.appendChild(remove)
}



toDoForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let taskInput = inputTask.value

    if(taskInput){

    saveTask(taskInput)


}
})

document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("doneBtn")){
        parentEl.classList.toggle("made");
    }

    if(targetEl.classList.contains("removeBtn")){
        parentEl.remove()
    }
})