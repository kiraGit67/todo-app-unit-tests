export function readTodosFromLocalStorage(toDos) {
  const todosFromStorage = localStorage.getItem("todos");
  if (todosFromStorage !== null) {
    toDos = JSON.parse(todosFromStorage);
    return toDos;
  } else {
    return [];
  }
}

export function saveTodosToLocalStorage(toDos) {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

export function isDuplicate(toDoInput, toDos) {
  toDoInput = toDoInput.toLowerCase();
  console.log(toDos);
  return toDos
    .map((currentToDo) => currentToDo.todo.toLowerCase())
    .includes(toDoInput);
}

export function getFilterValue(selectorElement) {
  return document.querySelector(selectorElement).value;
}
