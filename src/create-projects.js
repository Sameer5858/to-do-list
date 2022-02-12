import { uuid, Task } from "./create-task";
import isThisWeek from "date-fns/isThisWeek";
import subDays from "date-fns/subDays";

export function Project(name, specialId) {
  let id;
  if (specialId) {
    id = specialId;
  } else {
    id = uuid();
  }

  let state = {
    name,
    id,
    tasks: [],
  };

  return {
    get name() {
      return state.name;
    },
    set name(value) {
      state.name = value;
    },
    get id() {
      return state.id;
    },

    get tasks() {
      return state.tasks;
    },
    addTask(...value) {
      state.tasks.push(Task(state.id, ...value));
    },
    getTask(value) {
      return state.tasks.find((task) => task.id === value);
    },
    deleteTask(value) {
      const indexToDelete = state.tasks.indexOf(this.getTask(value));
      state.tasks.splice(indexToDelete, 1);
    },
    get getTasksThisWeek() {
      return state.tasks.filter((task) => {
        const taskDate = new Date(task.getDateFormatted);
        return isThisWeek(subDays(taskDate, 1));
      });
    },
  };
}
