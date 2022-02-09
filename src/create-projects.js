import { uuid } from "./create-todo";
import { projects } from ".";
function createProject(projectName) {
  const array = [];
  array[0] = { projectName, projectId: uuid() };
  projects.push(array);
}
export { createProject };
