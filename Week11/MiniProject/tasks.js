document.addEventListener("DOMContentLoaded", displayTasks);

function displayTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        console.log(task.name)
        console.log(task.startDate.toLocaleString())
        console.log(task.endDate)


        listItem.innerHTML = `
            <strong>Name:</strong> ${task.name}<br>
            <strong>Start Date:</strong> ${task.startDate.toLocaleString()}<br>
            <strong>Days Left:</strong> ${calculateDaysLeft(task.endDate)}<br><br>
        `;
        taskList.appendChild(listItem);
    });
}

function calculateDaysLeft(endDate) {
    const today = new Date();
    const timeDifference = endDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
}
