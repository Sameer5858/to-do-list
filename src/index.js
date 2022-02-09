import { createTodo } from "./create-todo";
import { createProject } from "./create-projects";
export const projects = [];
createProject("hello");
createProject("hel");
projects[0].push(createTodo("hello", "yeoolo"));
projects[0].push(createTodo("hello", "yeoolo"));
projects[0].push(createTodo("hello", "yeoolo"));
console.log(projects);
