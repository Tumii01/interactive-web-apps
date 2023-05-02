import { createOrderData,  updateDragging   } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml } from "./view.js";
const handleHelpToggle = (event) => {
  const overlay = html.help.overlay;
  overlay.show();
  if (event.target === html.help.cancel) {
    overlay.close();
  }
};
const handleAddToggle = (a) => {
  html.other.add.focus();
  const overlay = html.add.overlay;
  overlay.show();
  if (a.target === html.add.cancel) {
    overlay.close();
    html.add.form.reset();
  }
};
const handleAddSubmit = (b) => {
  b.preventDefault();
  const overlay = html.add.overlay;
  const formData = new FormData(b.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const append = document.querySelector('[data-area="ordered"]');
  b.target.reset();
  overlay.close();
  append.appendChild(htmlData);
};
const handleEditToggle = (c) => {
  const overlay = html.edit.overlay;
  const cancelBtn = html.edit.cancel;
  const input = html.edit.title;
  const select = html.edit.table;
  const option = html.edit.column;
  c.target.dataset.id ? overlay.show() : undefined;
  const id = c.target.dataset.id ? c.target.dataset.id : undefined;
  input.value = c.target.dataset.id
    ? c.target.querySelector(".order__title").textContent
    : undefined;
  select.value = c.target.dataset.id
    ? c.target.querySelector(".order__value").textContent
    : undefined;
  let section = document.querySelector(`[data-id="${id}"]`);
  option.value = section ? section.closest("section").dataset.area : "";
  if (c.target === cancelBtn) {
    overlay.close();
  }
  html.edit.delete.id = id;
};
const handleEditSubmit = (d) => {
  d.preventDefault();
  const idRemove = html.edit.delete.id;
  const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
  orderDelete.remove();
  const overlay = html.edit.overlay;
  const formData = new FormData(d.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const appended = document.querySelector(`[data-area="${newData.column}"]`);
  appended.appendChild(htmlData);
  d.target.reset();
  overlay.close();
};
const handleDelete = () => {
  const idToBeDeleted = html.edit.delete.id;
  const orderToBeDeleted = document.querySelector(
    `[data-id="${idToBeDeleted}"]`
  );
  const overlay = html.edit.overlay;
  orderToBeDeleted.remove();
  overlay.close();
};
html.add.cancel.addEventListener("click", handleAddToggle); 
html.other.add.addEventListener("click", handleAddToggle); 
html.add.form.addEventListener("submit", handleAddSubmit); 
html.other.grid.addEventListener("click", handleEditToggle); 
html.edit.cancel.addEventListener("click", handleEditToggle); 
html.edit.form.addEventListener("submit", handleEditSubmit); 
html.edit.delete.addEventListener("click", handleDelete); 
html.help.cancel.addEventListener("click", handleHelpToggle); 
html.other.help.addEventListener("click", handleHelpToggle); 
//Dragging events
/**
* A handler that fires when a user drags over any element inside a column. In
* order to determine which column the user is dragging over the entire event
* bubble path is checked with `event.path` (or `event.composedPath()` for
* browsers that don't support `event.path`). The bubbling path is looped over
* until an element with a `data-area` attribute is found. Once found both the
* active dragging column is set in the `state` object in "data.js" and the HTML
* is updated to reflect the new column.
*
* @param {Event} event
*/
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }
  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
let dragged;
const handleDragStart = (e) => {
  dragged = e.target;
};
const handleDragDrop = (f) => {
  f.target.append(dragged);
};
const handleDragEnd = (g) => {
  const background = g.target.closest("section");
  background.style.backgroundColor = "";
};
for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd)
}