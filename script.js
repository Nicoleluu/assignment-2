const buttons = document.querySelectorAll(".value-btn");
const constellation = document.getElementById("constellation");
const addButton = document.getElementById("addValue");
const input = document.getElementById("customValue");

const colors = ["#A8C3A0", "#AFC6E9", "#E9D66B"];

function makeDraggable(el) {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  el.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const rect = constellation.getBoundingClientRect();

    el.style.left = `${e.clientX - rect.left - offsetX}px`;
    el.style.top = `${e.clientY - rect.top - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
}

function createStar(value) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerText = value;

  star.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  star.style.left = Math.random() * 80 + "%";
  star.style.top = Math.random() * 80 + "%";

  constellation.appendChild(star);

  makeDraggable(star);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    createStar(button.innerText);
  });
});

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    createStar(input.value);
    input.value = "";
  }
});
