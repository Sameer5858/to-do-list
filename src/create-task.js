// factory function creating tasks
export function Task(projectId, title, dueDate, description, priority, status) {
  const id = uuid();
  let state = {
    projectId,
    title,
    dueDate,
    description,
    priority,
    status,
    id,
  };

  return {
    get projectId() {
      return projectId;
    },
    set projectId(value) {
      return (state.projectId = value);
    },
    get title() {
      return state.title;
    },
    set title(value) {
      state.title = value;
    },
    get id() {
      return state.id;
    },
    get description() {
      return state.description;
    },
    set description(value) {
      state.description = value;
    },
    get dueDate() {
      return state.dueDate;
    },
    set dueDate(value) {
      state.dueDate = value;
    },
    get priority() {
      return state.priority;
    },
    set priority(value) {
      state.priority = value;
    },
    get status() {
      return state.status;
    },
    toggleStatus() {
      if (state.status) {
        state.status = false;
      } else state.status = true;
    },
    get getDateFormatted() {
      const day = state.dueDate.split("-")[2];
      const month = state.dueDate.split("-")[1];
      const year = state.dueDate.split("-")[0];
      return `${month}/${day}/${year}`;
    },
  };
}

export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
