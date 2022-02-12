import { ToDoList } from "./to-do-list";
import {
  addNewProject,
  addNewTask,
  modalClose,
  modalOpen,
  loadTaskContent,
  loadProjectNav,
} from "./ui";
export let toDoList = ToDoList;
if (localStorage.getItem("toDoList")) {
  let stringify = localStorage.getItem("toDoList");
  let parse = JSON.parse(stringify);
  let toDoList = Object.assign(parse, ToDoList);
} else {
  toDoList = ToDoList;
}

const addTaskBtn = document.getElementById("addTask");
const addProjectButton = document.getElementById("addProject");
const newProject = document.getElementById("newProject");
const overlay = document.getElementById("overlay");
const modalSubmitAddTask = document.getElementById("taskSubmit");
const modalCancelTask = document.getElementById("cancelTask");
const editSubmitTask = document.getElementById("editSubmitTask");
const modalTitle = document.getElementById("title");
const modalDescription = document.getElementById("description");
const modalDueDate = document.getElementById("dueDate");
const modalPriority = document.getElementById("priority");
const fixedProjectButtons = document.querySelectorAll(".fixedBtns");
addProjectButton.addEventListener("click", () => {
  newProject.classList.add("active");
  const projectSubmitButton = document.getElementById("projectSubmit");
  const cancelProjectButton = document.getElementById("cancelProject");
  const newProjectInput = document.getElementById("projectTitle");
  cancelProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    newProject.classList.remove("active");
    newProjectInput.value = "";
  });
  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (newProjectInput.value) {
      addNewProject(newProjectInput.value);
      newProject.classList.remove("active");
      newProjectInput.value = "";
    }
  });
});
modalCancelTask.addEventListener("click", () => {
  modalClose();
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
});
fixedProjectButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-project-id");
    addTaskBtn.setAttribute("data-project-id", projectId);
    loadTaskContent(projectId);
    newProject.classList.remove("active");
  });
});
modalSubmitAddTask.addEventListener("click", (e) => {
  const projectId = addTaskBtn.getAttribute("data-project-id");

  if (modalTitle.value) {
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
addTaskBtn.addEventListener("click", (e) => {
  modalOpen();
});
overlay.addEventListener("click", () => {
  modalClose();
  modalSubmitAddTask.style.display = "block";
  editSubmitTask.style.display = "none";
});
