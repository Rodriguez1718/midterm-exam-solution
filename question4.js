// CRUD //

// Array to store tasks
let tasks = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    })
}

// Function to add task
function addTask(event) {
    event.preventDefault(); // Prevent form submission
    const newTask = taskInput.ariaValueMax.trim();
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = ''; // Clear the input
        renderTasks();
    }
}

// Function to edit task
function editTask(index) {
    const updatedTask = prompt('Edit your task:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        renderTasks();
    }
}

// Function to delete task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Event Listeners
taskForm.addEventListener('submit', addTask);

// Initial render
renderTasks();