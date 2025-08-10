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
};

let data = [{}];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description:textarea.value,
    });
    
    localStorage.setItem("data", JSON.stringify(data));

    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = ""
    data.map((x, y)=>{
        return (tasks.innerHTML += `
        <div id=${y}>
            <span class="font-weight-bold">${x.text}</span>
            <span class="small text-secondary">${x.date}</span>
            <p>${x.description}</p>

            <span class="options">
                <i onClick = "editTask(this)" data-toggle="modal" data-target="#form" class="fa-solid fa-pen-to-square"></i>
                <i onClick = "deleteTask(this);createTasks()" class="fa-solid fa-trash"></i>
            </span>
        </div>`
        );
    });
    
    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
}

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
})();
