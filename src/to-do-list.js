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
    addProject(value) {
      state.projects.push(Project(value));
    },
    getProject(value) {
      return state.projects.find((project) => project.id === value);
    },
    deleteProject(value) {
      const indexToDelete = state.projects.indexOf(this.getProject(value));
      state.projects.splice(indexToDelete, 1);
    },
  };
})();
