// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList[index] = editedTask;
  return taskList;
}

function completeTask(taskList, index) {
  taskList[index].completed = true;
  return taskList;
}

function clearCompletedTasks(taskList) {
  return taskList.filter((e) => e.completed === false);
}

function sortTasksByDate(taskList) {
  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return taskList.sort(sortByDate);
}

function filterTasksByKeyword(taskList, keyword) {
  const filterByKeyword = (e) => {
    return e.toUpperCase().includes(keyword.toUpperCase());
  }
  return taskList.filter(filterByKeyword);
}

function getCompletedTasks(taskList) {
  const getCompleted = (e) => {
    return e.completed === true;
  }
  return taskList.filter(getCompleted);
}

function getIncompleteTasks(taskList) {
  const getCompleted = (e) => {
    return e.completed === false;
  }
  return taskList.filter(getCompleted);
}

function getTaskCount(taskList) {
  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  const filtered = getCompletedTasks(taskList);
  return filtered.length;
}

function getIncompleteTaskCount(taskList) {
  const filtered = getIncompleteTasks(taskList);
  return filtered.length;
}

function removeCompletedTasks(taskList) {
  return taskList.filter((e) => e.completed === false);  
}

function markAllTasksAsCompleted(taskList) {
  taskList.forEach(e => {
    e.completed = true;
  });
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {
  taskList.forEach(e => {
    e.completed = false;
  });
  return taskList;
}

function addTaskToList(taskList, task) {
  taskList.push({task: task, completed: false});
  return taskList;
}

function deleteTaskFromList(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTaskInList(taskList, index, newTask) {
  taskList.splice(index, 1, {task : newTask, completed: false});
  return taskList;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  const newIndex = index - 1;
  const otherElement = taskList[newIndex]
  const currentElement = taskList[index]
  taskList.splice(index, 1, otherElement)
  taskList.splice(newIndex, 1, currentElement)
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  const newIndex = index + 1;
  const otherElement = taskList[newIndex]
  const currentElement = taskList[index]
  taskList.splice(index, 1, otherElement)
  taskList.splice(newIndex, 1, currentElement)
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
