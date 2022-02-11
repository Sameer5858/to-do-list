import { ToDoList } from "./to-do-list";
import { Project } from "./create-projects";
import { Task } from "./create-task";

const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");
const newTodoList = ToDoList;

addNewProject("pewew232323232fkjeuhfhefugeyf");
addNewProject("pefkje3232311111uhfhefugefefgygegyfgegyf");
addNewProject("pefkjeuhfh121ygegyfgegyf");
addNewProject("pewew232323232fkjeuhfhefugeyf");
addNewProject("pefkje3232311111uhfhefugefefgygegyfgegyf");
addNewProject("pefkjeuhfh121ygegyfgegyf");
let id = newTodoList.projects[3].id;
addNewTask(id, "pppp", "dhdhd");
addNewTask(id, "pppp", "dhdhd");
addNewTask(id, "pppp", "dhdhd");
let id2 = newTodoList.projects[4].id;
addNewTask(id2, "ppdsdpp", "dhdhd");
addNewTask(id2, "psdsppp", "dhdhd");
addNewTask(id2, "pdsdddppp", "dhdhd");

function deleteProject(projectId) {
  newTodoList.deleteProject(projectId);
  projectNavContainer.innerHTML = "";
  loadProjectsNav();
}
function addNewTask(projectId, ...details) {
  taskContentContainer.innerHTML = "";
  const project = newTodoList.getProject(projectId);
  project.addTask(...details);
  loadTaskContent(projectId);
}
function loadTaskContent(projectId) {
  const project = newTodoList.getProject(projectId);
  if (!project) {
    return;
  }
  const tasks = project.tasks;
  taskContentContainer.innerHTML = "";
  tasks.forEach((task) => {
    renderTaskContent(task);
  });
}
function renderTaskContent(task) {
  const button = document.createElement("button");
  const titleDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const close = document.createElement("img");
  const checkbox = document.createElement("input");
  close.setAttribute("id", "close");
  close.addEventListener("click", () => console.log("hello"));
  button.setAttribute("date-task-id", `${task.id}`);
  titleDiv.setAttribute("date-task-id", `${task.id}`);
  dateDiv.setAttribute("date-task-id", `${task.id}`);
  close.setAttribute("date-task-id", `${task.id}`);
  checkbox.setAttribute("date-task-id", `${task.id}`);
  button.setAttribute("date-project-id", `${task.projectId}`);
  titleDiv.setAttribute("date-project-id", `${task.projectId}`);
  dateDiv.setAttribute("date-project-id", `${task.projectId}`);
  close.setAttribute("date-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  button.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  close.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  button.appendChild(checkbox);
  button.appendChild(titleDiv);
  button.appendChild(dateDiv);
  button.appendChild(close);
  taskContentContainer.appendChild(button);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  newTodoList.addProject(name);
  loadProjectsNav();
  loadTaskContent("inbox");
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
    const text = document.createElement("div");
    const img = document.createElement("img");
    const close = document.createElement("img");
    button.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      loadTaskContent(projectId);
    });
    close.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      deleteProject(projectId);
    });
    button.classList.add("project");
    img.src = "./icons/calendar-multiple-check.svg";
    close.src = "./icons/close.svg";
    close.setAttribute("data-project-id", `${project.id}`);
    img.setAttribute("data-project-id", `${project.id}`);
    text.setAttribute("data-project-id", `${project.id}`);

    button.append(img);
    text.textContent = project.name;
    text.classList.add("text");
    button.appendChild(text);
    button.appendChild(close);
    button.setAttribute("data-project-id", `${project.id}`);
    projectNavContainer.appendChild(button);
  }
}
