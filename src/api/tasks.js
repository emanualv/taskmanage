let tasks = [];

export async function getTasks() {
  // Replace with real API call later
  // return a shallow copy to avoid external mutation
  return tasks.slice();
}

export async function addTask(task) {
  // Replace with POST API call
  // assign a simple numeric id when creating
  const newTask = { ...task, id: task.id || Date.now() };
  tasks.push(newTask);
  return newTask;
}

export async function deleteTask(id) {
  // Replace with DELETE API call
  tasks = tasks.filter(t => t.id !== id);
  return id;
}

export async function updateTask(task) {
  // Replace with PUT API call
  // prefer matching by id if available
  const index = tasks.findIndex(t => t.id === task.id);
  if (index !== -1) tasks[index] = task;
  return task;
}
