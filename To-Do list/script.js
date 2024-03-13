document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskCategory = document.getElementById('taskCategory').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskLabel = document.getElementById('taskLabel').value;

    addTask(taskName, taskCategory, taskDeadline, taskPriority, taskLabel);

    this.reset(); // Reset form fields
});

function addTask(name, category, deadline, priority, label) {
    const tasksDiv = document.getElementById('tasks');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task', priority.toLowerCase());

    const content = `
        <h3>${name} <small>(${category})</small></h3>
        <p>Deadline: ${deadline}</p>
        <p>Priority: ${priority}</p>
        <p>Label: ${label}</p>
    `;

    taskDiv.innerHTML = content;
    tasksDiv.appendChild(taskDiv);
}
