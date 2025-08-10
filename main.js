let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let textarea = document.getElementById("textarea");
let dateInput = document.getElementById("dateInput");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-dismiss", "modal")
        add.click();

        (()=>{
            add.setAttribute("data-dismiss", "");
        })()

    }
}

let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    
    createTasks();
}

let createTasks = () => {
    tasks.innerHTML += `
    <div>
        <span class="font-weight-bold">${data.text}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.description}</p>

        <span class="options">
            <i onClick = "editTask(this)" data-toggle="modal" data-target="#form" class="fa-solid fa-pen-to-square"></i>
            <i onClick = "deleteTask(this)" class="fa-solid fa-trash"></i>
        </span>
    </div>`
    resetForm();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove()
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    selectedTask.remove();
}

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}