// Entry point for JavaScript logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized");
});

// Get references to HTML elements
const inputID = document.getElementById("task-input")
const clearID = document.getElementById("clear-tasks")
const listID = document.getElementById("task-list")
const formID = document.getElementById("task-form")
const sortID = document.getElementById("sort")
const no_tasksMessage = document.getElementById("no-tasks")



// Function to add a new task
formID.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const taskText = inputID.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" class="task-checkbox">`+
  `<span class="task-text">${taskText}</span>`+
  `<button class="delete-btn"></button>`;
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove(); // Remove the task item
  });

  li.className = "task-item";

  listID.appendChild(li);

  
  inputID.value = ""; // Clear input field
})

// Function to clear all tasks
clearID.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all tasks?")) {
    listID.innerHTML = ""; // Clear the task list
  }
});

// Function to sort tasks
sortID.addEventListener("change", function () {
  const tasks = Array.from(listID.querySelectorAll(".task-item"));
  const completedTasks = tasks.filter(task => task.querySelector(".task-checkbox").checked);
  const pendingTasks = tasks.filter(task => !task.querySelector(".task-checkbox").checked);

  listID.innerHTML = ""; // Clear the current list
  for (const task of pendingTasks) {
    listID.appendChild(task); // Append pending tasks first
  }
  for (const task of completedTasks) {
    listID.appendChild(task); // Append completed tasks last
  }
});

