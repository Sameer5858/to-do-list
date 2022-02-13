import { UpdateStorage } from "./storage";
import { toDoList } from ".";
const projectNavContainer = document.getElementById("project-container");
const taskContentContainer = document.getElementById("task-container");
const projectHeader = document.querySelector(".project-header");
const addTaskBtn = document.getElementById("addTask");
const newProject = document.getElementById("newProject");
const modal = document.getElementById("task");
const overlay = document.getElementById("overlay");
const modalSubmitAddTask = document.getElementById("taskSubmit");
const editSubmitTask = document.getElementById("editSubmitTask");
const modalTitle = document.getElementById("title");
const modalDescription = document.getElementById("description");
const modalDueDate = document.getElementById("dueDate");
const modalPriority = document.getElementById("priority");

function modalOpen() {
  modal.classList.add("active");
  overlay.classList.add("active");
}
function modalClose() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  modalTitle.value = "";
  modalDueDate.value = "";
  modalDescription.value = "";
  modalPriority.value = "Low";
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
  modalEditOn();
}
function modalEditOn() {
  modalTitle.disabled = false;
  modalDescription.disabled = false;
  modalDueDate.disabled = false;
  modalPriority.disabled = false;
  modalSubmitAddTask.disabled = false;
}
function modalEditOff() {
  modalTitle.disabled = true;
  modalDescription.disabled = true;
  modalDueDate.disabled = true;
  modalPriority.disabled = true;
  modalSubmitAddTask.disabled = true;
}

function deleteTask(projectId, taskId) {
  const project = toDoList.getProject(projectId);
  project.deleteTask(taskId);
  toDoList.weekTask();
  toDoList.todayTask();
  loadTaskContent(projectId);
  UpdateStorage();
}
function deleteProject(projectId) {
  toDoList.deleteProject(projectId);
  projectNavContainer.innerHTML = "";
  loadProjectsNav();
  UpdateStorage();
}
function addNewTask(projectId, ...details) {
  taskContentContainer.innerHTML = "";
  const project = toDoList.getProject(projectId);
  project.addTask(...details);
  toDoList.weekTask();
  toDoList.todayTask();
  loadTaskContent(projectId);
  UpdateStorage();
}
function loadTaskContent(projectId) {
  const project = toDoList.getProject(projectId);
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
function openDetailTask() {
  const projectId = titleDiv.getAttribute("data-project-id");
  const taskId = titleDiv.getAttribute("data-task-id");
  const project = toDoList.getProject(projectId);
  const task = project.getTask(taskId);
  modalTitle.value = task.title;
  modalDescription.value = task.description;
  modalDueDate.value = task.dueDate;
  modalPriority.value = task.priority;
  modalEditOff();
  modalOpen();
}
function renderTaskContent(task) {
  const div = document.createElement("div");
  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.classList.add("taskButtons");
  const detailsButton = document.createElement("button");
  const editButton = document.createElement("button");
  detailsButton.setAttribute("id", "taskDetails");
  editButton.setAttribute("id", "editDetails");
  detailsButton.textContent = "Details";
  editButton.textContent = "Edit";
  taskButtonsDiv.appendChild(editButton);
  taskButtonsDiv.appendChild(detailsButton);
  const titleDiv = document.createElement("div");
  div.classList.add(task.priority);
  detailsButton.addEventListener("click", () => {
    const projectId = titleDiv.getAttribute("data-project-id");
    const taskId = titleDiv.getAttribute("data-task-id");
    const project = toDoList.getProject(projectId);
    const task = project.getTask(taskId);
    modalTitle.value = task.title;
    modalDescription.value = task.description;
    modalDueDate.value = task.dueDate;
    modalPriority.value = task.priority;
    modalEditOff();
    modalOpen();
  });
  editButton.addEventListener("click", () => {
    const projectId = titleDiv.getAttribute("data-project-id");
    const taskId = titleDiv.getAttribute("data-task-id");
    const project = toDoList.getProject(projectId);
    const task = project.getTask(taskId);
    modalTitle.value = task.title;
    modalDescription.value = task.description;
    modalDueDate.value = task.dueDate;
    modalPriority.value = task.priority;
    modalEditOff();
    modalOpen();
    modalEditOn();
    modalSubmitAddTask.style.display = "none";
    editSubmitTask.style.display = "block";
    editSubmitTask.addEventListener("click", () => {
      if (modalTitle.value) {
        project.deleteTask(taskId);
        addNewTask(
          projectId,
          modalTitle.value,
          modalDueDate.value,
          modalDescription.value,
          modalPriority.value
        );

        modalClose();
      }
    });
  });
  const dateDiv = document.createElement("div");
  const close = document.createElement("img");
  close.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-project-id");
    const taskId = e.target.getAttribute("data-task-id");
    deleteTask(projectId, taskId);
  });
  const checkbox = document.createElement("input");
  if (task.status) {
    div.classList.add("done");
    checkbox.checked = true;
  }
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      div.classList.add("done");
      task.toggleStatus();
      UpdateStorage();
    } else {
      div.classList.remove("done");
      task.toggleStatus();
      UpdateStorage();
    }
  });
  close.setAttribute("id", "close");
  div.setAttribute("data-task-id", `${task.id}`);
  titleDiv.setAttribute("data-task-id", `${task.id}`);
  dateDiv.setAttribute("data-task-id", `${task.id}`);
  close.setAttribute("data-task-id", `${task.id}`);
  checkbox.setAttribute("data-task-id", `${task.id}`);
  div.setAttribute("data-project-id", `${task.projectId}`);
  titleDiv.setAttribute("data-project-id", `${task.projectId}`);
  dateDiv.setAttribute("data-project-id", `${task.projectId}`);
  close.setAttribute("data-project-id", `${task.projectId}`);
  checkbox.setAttribute("date-project-id", `${task.projectId}`);
  div.classList.add("task");
  titleDiv.classList.add("task-title");
  titleDiv.textContent = `${task.title}`;
  if (task.status) {
    titleDiv.classList.add("done");
  }
  dateDiv.textContent = `${task.dueDate}`;
  dateDiv.classList.add("duedate");
  close.src = "./icons/close.svg";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "taskstatus");
  div.appendChild(checkbox);
  div.appendChild(titleDiv);
  div.appendChild(dateDiv);
  div.appendChild(taskButtonsDiv);
  div.appendChild(close);
  taskContentContainer.appendChild(div);
}

function addNewProject(name) {
  projectNavContainer.innerHTML = "";
  toDoList.addProject(name);
  loadProjectsNav();
  UpdateStorage();
}
function loadProjectsNav() {
  toDoList.projects.forEach((project) => {
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
    close.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      deleteProject(projectId);
      loadTaskContent("inbox");
      addTaskBtn.setAttribute("data-project-id", "inbox");
    });
    button.addEventListener("click", (e) => {
      const projectId = e.target.getAttribute("data-project-id");
      if (toDoList.getProject(projectId)) {
        addTaskBtn.setAttribute("data-project-id", projectId);
        loadTaskContent(projectId);
        newProject.classList.remove("active");
      }
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
export {
  loadProjectsNav,
  addNewProject,
  addNewTask,
  modalOpen,
  modalClose,
  loadTaskContent,
};
