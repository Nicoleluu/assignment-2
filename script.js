const constellation = document.getElementById("constellation");
const addBtn = document.getElementById("addValue");
const input = document.getElementById("valueInput");
const pills = document.querySelectorAll(".pill");

/* make existing stars draggable */
document.querySelectorAll(".star").forEach(makeDraggable);

/* clicking pills adds stars */
pills.forEach(pill => {
  pill.addEventListener("click", () => {
    createStar(pill.innerText);
  });
});

/* custom input */
addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    createStar(input.value);
    input.value = "";
  }
});

function createStar(text) {
  const star = document.createElement("div");
  star.className = "star";
  star.innerText = text;

  star.style.left = Math.random() * 70 + "%";
  star.style.top = Math.random() * 70 + "%";

  const colors = ["#d8dfc6", "#d8e3f4", "#eadc86"];
  star.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  constellation.appendChild(star);

  makeDraggable(star);
}

function makeDraggable(el) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  el.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    el.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = constellation.getBoundingClientRect();

    let x = e.clientX - rect.left - offsetX;
    let y = e.clientY - rect.top - offsetY;

    x = Math.max(0, Math.min(x, rect.width - el.offsetWidth));
    y = Math.max(0, Math.min(y, rect.height - el.offsetHeight));

    el.style.left = x + "px";
    el.style.top = y + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    el.style.cursor = "grab";
  });
}
