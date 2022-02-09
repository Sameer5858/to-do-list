import { uuid } from "./create-task";

export function Project(name) {
  let tasks = [];
  const id = uuid();
  const addTask = (task) => {
    tasks.push(task);
  };
  const deleteTask = (id) => {
    tasks.forEach((task) => {
      if (id === task.id) {
        const taskIndex = tasks.indexOf(task);
        tasks.splice(taskIndex, 1);
      }
    });
  };
  return {
    name,
    id,
    tasks,
    addTask,
    deleteTask,
  };
}
