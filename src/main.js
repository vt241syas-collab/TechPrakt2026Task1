import './style.css'

const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
  if (!input.value.trim()) return;

  const li = document.createElement('li');
  li.textContent = input.value;

  list.appendChild(li);
  input.value = '';
});