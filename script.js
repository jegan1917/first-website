function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let listItem = document.createElement("li");
    listItem.textContent = task;

    listItem.onclick = function() {
        listItem.style.textDecoration = "line-through";
        updateStats();
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        listItem.remove();
        updateStats();
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";

    updateStats();
}


function updateStats() {
    let tasks = document.querySelectorAll("#taskList li");

    let total = tasks.length;
    let completed = 0;

    tasks.forEach(function(task) {
        if (task.style.textDecoration === "line-through") {
            completed++;
        }
    });

    let pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}