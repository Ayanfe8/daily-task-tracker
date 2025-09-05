// =======================
// Part 1: Variables & Conditionals
// =======================

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");
const clearAllBtn = document.getElementById("clear-tasks-btn");

// Store tasks in an array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Max tasks allowed
const maxTasks = 10;

// Quotes array
const quotes = [
  "You’ve got this!",
  "Small steps lead to big changes.",
  "Progress, not perfection.",
  "Stay focused and never give up.",
  "One task at a time!",
];

// =======================
// Part 2: Custom Functions
// =======================

// Render tasks to the DOM
function renderTasks() {
  taskList.innerHTML = "";

  // =======================
  // Part 3: Loop Examples
  // =======================

  // Loop through tasks and create list items
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Create delete button
    const delBtn = document.createElement("a");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(i);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show a random motivational quote
function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

// =======================
// Part 4: DOM Interactions
// =======================

// Add a new task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please add a task.");
    return;
  }

  if (tasks.length >= maxTasks) {
    alert("Task limit reached!");
    return;
  }

  tasks.push(task);
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

// Allow 'Enter' key to add a task as well.
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

// Delete a task by index
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Clear all tasks
clearAllBtn.addEventListener("click", clearAll);

function clearAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
}

// 1. Get input value → document.getElementById("taskInput")
// 2. Create elements → document.createElement("li", "button")
// 3. Update DOM → appendChild(), innerHTML
// 4. Show quote → document.getElementById("quote").textContent

// =======================
// Initialize App
// =======================

renderTasks(); // Load saved tasks
showQuote(); // Show quote on page load
