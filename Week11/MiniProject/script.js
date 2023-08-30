document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    taskForm.addEventListener("submit", addTask);
});

function addTask(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const task = {
        name,
        description,
        startDate: new Date(document.getElementById("startDate").value),
        endDate: new Date(document.getElementById("endDate").value),
        isCompleted: false
    };

    console.log(task)

    saveTaskToLocalStorage(task);
    window.location.href = "tasks.html"; // Redirect to the tasks page
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
