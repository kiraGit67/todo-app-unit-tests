/// <reference types="jest" />

import { isDuplicate } from "./lib";
import { saveTodosToLocalStorage } from "./lib";

const toDos = [
  { todo: "Learn HTML", done: false },
  { todo: "Learn CSS", done: false },
  { todo: "Learn JavaScript", done: false },
];

test("isDuplicate should return false if toDos not includes toDoInput", () => {
  const result = isDuplicate("Learn Node.js", toDos);
  expect(result).toBe(false);
});

test("isDuplicate should return true if toDos includes toDoInput", () => {
  const result = isDuplicate("Learn CSS", toDos);
  expect(result).toBe(true);
});
/*
test("saveTodosToLocalStorage", () => {
  const result = saveTodosToLocalStorage("http://127.0.0.1:5500", toDos);
  expect(result).toBe([
    { todo: "Learn HTML", done: false },
    { todo: "Learn CSS", done: false },
    { todo: "Learn JavaScript", done: false },
  ]);
});
*/
