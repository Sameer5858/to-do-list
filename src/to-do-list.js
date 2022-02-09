import { Project } from "./create-projects";
import { Task } from "./create-task";

function ToDoList() {
  const projects = [];
  projects.push(new Project("Inbox"));
  projects.push(new Project("Today"));
  projects.push(new Project("This Week"));
  const addProject = (name) => {
    projects.push(new Project(`${name}`));
  };
  const deleteProject = (id) => {
    projects.forEach((project) => {
      if (id === project.id) {
        const projectIndex = projects.indexOf(project);
        projects.splice(projectIndex, 1);
      }
    });
  };

  return { projects, addProject, deleteProject };
}
export { ToDoList };
