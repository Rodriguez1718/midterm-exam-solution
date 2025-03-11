// CRUD //

// Array to store tasks
let tasks = [];

// Initial task id counter
let taskId = 0;

const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById('task-description-input');
const taskList = document.getElementById('task-list');

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <strong>${task.name}</strong>: ${task.description}
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add task
function addTask(event) {
    event.preventDefault(); // Prevent form submission
    const taskName = taskNameInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    
    if (taskName && taskDescription) {
        const newTask = {
            id: taskId++,
            name: taskName,
            description: taskDescription
        };
        tasks.push(newTask);
        taskNameInput.value = ''; // Clear the input
        taskDescriptionInput.value = ''; // Clear the description input
        renderTasks();
    }
}

// Function to edit task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const updatedName = prompt('Edit task name:', task.name);
    const updatedDescription = prompt('Edit task description:', task.description);
    
    if (updatedName !== null && updatedDescription !== null) {
        task.name = updatedName.trim();
        task.description = updatedDescription.trim();
        renderTasks();
    }
}

// Function to delete task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}

// Event Listeners
taskForm.addEventListener('submit', addTask);

// Initial render
renderTasks();
