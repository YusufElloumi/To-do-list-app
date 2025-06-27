// Entry point for JavaScript logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized");
});

const inputID = document.getElementById("task-input")
const clearID = document.getElementById("clear-tasks")
const filterID = document.getElementById("filter-options")
const listID = document.getElementById("task-list")
const formID = document.getElementById("task-form")

// Function to add a new task
formID.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = inputID.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  li.className = "task-item";

  listID.appendChild(li);

  
  inputID.value = ""; // Clear input field
})
