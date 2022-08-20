// Select the elements (Box, select, inputs)
const [form] = document.forms;
const [borderStyle, borderWidth, borderRadius] = [...form];
const box = form.previousElementSibling;

// Adding an event listener to the document once it's loaded
document.addEventListener("DOMContentLoaded", function () {
  box.style.borderStyle = 'ridge';
  box.style.borderWidth = `5px`;
  borderWidth.nextElementSibling.textContent = `5px`;
  box.style.borderRadius = `15%`;
  borderRadius.nextElementSibling.textContent = `15%`;

  // Listening for when the select input is changed
  borderStyle.addEventListener("change", (e) => {
    console.log(e.target.value);
    // this will change the style of the border for the box
    box.style.borderStyle = e.target.value;
  });

  borderWidth.addEventListener("input", (e) => {
    console.log(e.target.value);
    box.style.borderWidth = `${e.target.value}px`;
    borderWidth.nextElementSibling.textContent = `${e.target.value}px`;
  });

  borderRadius.addEventListener("input", (e) => {
    console.log(e.target.value);
    box.style.borderRadius = `${e.target.value}%`;
    borderRadius.nextElementSibling.textContent = `${e.target.value}%`;
  });
});
