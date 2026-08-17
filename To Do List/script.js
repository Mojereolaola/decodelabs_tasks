const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

let count = 0;

// Update Task Counter
function updateCount() {
    const remainingTasks = document.querySelectorAll("#taskList li:not(.completed)").length;
    taskCount.textContent = remainingTasks;
}

// Add Task
addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task;

    // Mark as Completed
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateCount();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCount();

});

// Press Enter to Add Task
taskInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        addBtn.click();
    }

});

// Clear All Tasks
clearBtn.addEventListener("click", () => {

    taskList.innerHTML = "";

    updateCount();

});

// Initial Count
updateCount();