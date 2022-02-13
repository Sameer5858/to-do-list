import { Project } from "./create-projects";

export const ToDoList = (function () {
  let state = { projects: [] };
  state.projects.push(Project("Inbox", "inbox"));
  state.projects.push(Project("Today", "today"));
  state.projects.push(Project("This Week", "week"));

  return {
    get projects() {
      return [...state.projects];
    },
    set projects(value) {
      state.projects = value;
    },
    addProject(value, specialId) {
      state.projects.push(Project(value, specialId));
    },
    getProject(value) {
      return state.projects.find((project) => project.id === value);
    },
    deleteProject(value) {
      const indexToDelete = state.projects.indexOf(this.getProject(value));
      state.projects.splice(indexToDelete, 1);
    },
    weekTask() {
      state.projects[2].tasks = [];
      state.projects.forEach((project) => {
        if (project.id === "today" || project.id === "week") {
          return;
        } else {
          const weekTasks = project.getThisWeekTasks();
          weekTasks.forEach((task) => {
            state.projects[2].tasks.push(task);
          });
        }
      });
    },
    todayTask() {
      state.projects[1].tasks = [];
      const todayTasks = state.projects[2].getTodayTasks();

      todayTasks.forEach((task) => {
        state.projects[1].tasks.push(task);
      });
    },
  };
})();
