const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");
const taskInput = document.getElementById("newTask");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const px = document.createElement("p");
    px.innerHTML = `
      <span>${task.name}</span>
      <button onclick="deleteTask(${i})">Delete</button>
    `;
    taskList.appendChild(px);
  }
}

addTask.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName) {
    tasks.push({ name: taskName });
    taskInput.value = "";
    updateLocalStorage();
    renderTasks();
  }
});

function deleteTask(index) {
  tasks.splice(index, 1);
  updateLocalStorage();
  renderTasks();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial rendering of tasks from local storage
renderTasks();
