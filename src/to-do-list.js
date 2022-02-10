import { Project } from "./create-projects";

export const ToDoList = (function () {
  const projects = [];
  projects.push(Project("Inbox", "inbox"));
  projects.push(Project("Today", "today"));
  projects.push(Project("This Week", "week"));
  let state = { projects };

  return {
    get projects() {
      return [...projects];
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
