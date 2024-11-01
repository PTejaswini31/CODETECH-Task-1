function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.className = "task-item";
        listItem.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span><button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function deleteTask(taskElement) {
    taskElement.parentElement.remove();
}

function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle("completed");
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}
