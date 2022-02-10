import { ToDoList } from "./to-do-list";

const newTodoList = ToDoList;
const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");

function addNewTask(project, ...details) {
  taskContentContainer.innerHTML = "";
  project.addTask(...details);
  loadTaskContent(project.tasks);
}
function loadTaskContent(tasks) {
  tasks.forEach((task) => {
    renderTaskContent(task);
  });
}
function renderTaskContent(task) {
  const button = document.createElement("button");
  const titleDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const img = document.createElement("img");
  const checkbox = document.createElement("input");
  button.setAttribute("date-task-id", `${task.id}`);
  titleDiv.setAttribute("date-task-id", `${task.id}`);
  dateDiv.setAttribute("date-task-id", `${task.id}`);
  img.setAttribute("date-task-id", `${task.id}`);
  checkbox.setAttribute("date-task-id", `${task.id}`);
  button.setAttribute("date-project-id", `${task.projectId}`);
  titleDiv.setAttribute("date-project-id", `${task.projectId}`);
  dateDiv.setAttribute("date-project-id", `${task.projectId}`);
  img.setAttribute("date-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  button.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  img.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  button.appendChild(checkbox);
  button.appendChild(titleDiv);
  button.appendChild(dateDiv);
  button.appendChild(img);
  taskContentContainer.appendChild(button);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  newTodoList.addProject(name);
  loadProjectsNav();
}
function loadProjectsNav() {
  newTodoList.projects.forEach((project) => {
    renderProjectNav(project);
  });
}
function renderProjectNav(project) {
  if (project.id === "inbox" || project.id === "today" || project.id === "week")
    return;
  else {
    const button = document.createElement("button");
    const img = document.createElement("img");
    button.classList.add("project");
    img.src = "./icons/calendar-multiple-check.svg";
    button.append(img);
    button.innerHTML += project.name;
    button.setAttribute("data-project-id", `${project.id}`);
    projectNavContainer.appendChild(button);
  }
}
