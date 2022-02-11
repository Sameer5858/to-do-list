import { ToDoList } from "./to-do-list";
import { Project } from "./create-projects";
import { Task } from "./create-task";
import { add } from "date-fns";

const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");
const projectHeader = document.querySelector(".project-header");
const addTaskBtn = document.getElementById("addTask");
const modal = document.getElementById("task");
const overlay = document.getElementById("overlay");
const submitAddTask = document.getElementById("taskSubmit");

submitAddTask.addEventListener("click", (e) => {
  const projectId = addTaskBtn.getAttribute("data-project-id");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const priority = document.getElementById("priority");

  if (title.value) {
    addNewTask(
      projectId,
      title.value,
      dueDate.value,
      description.value,
      priority.value
    );
    title.value = "";
    dueDate.value = "";
    description.value = "";
    priority.value = "Low";
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
});
addTaskBtn.addEventListener("click", (e) => {
  modal.classList.add("active");
  overlay.classList.add("active");
  overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});
const newTodoList = ToDoList;

addNewProject("pefkjeuhfh121ygegyfgegyf");
addNewProject("pewew232323232fkjeuhfhefugeyf");
addNewProject("pefkje3232311111uhfhefugefefgygegyfgegyf");
addNewProject("pefkjeuhfh121ygegyfgegyf");
let project = newTodoList.projects[4].id;

function deleteTask(projectId, taskId) {
  const project = newTodoList.getProject(projectId);
  project.deleteTask(taskId);
  loadTaskContent(projectId);
}
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
  projectHeader.textContent = `${project.name}`;
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
  close.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-project-id");
    const taskId = e.target.getAttribute("data-task-id");
    deleteTask(projectId, taskId);
  });
  const checkbox = document.createElement("input");
  close.setAttribute("id", "close");
  button.setAttribute("data-task-id", `${task.id}`);
  titleDiv.setAttribute("data-task-id", `${task.id}`);
  dateDiv.setAttribute("data-task-id", `${task.id}`);
  close.setAttribute("data-task-id", `${task.id}`);
  checkbox.setAttribute("data-task-id", `${task.id}`);
  button.setAttribute("data-project-id", `${task.projectId}`);
  titleDiv.setAttribute("data-project-id", `${task.projectId}`);
  dateDiv.setAttribute("data-project-id", `${task.projectId}`);
  close.setAttribute("data-project-id", `${task.projectId}`);
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
      addTaskBtn.setAttribute("data-project-id", `${project.id}`);
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
