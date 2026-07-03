const constellation = document.getElementById("constellation");
const addBtn = document.getElementById("addValue");
const input = document.getElementById("valueInput");

function createStar(text) {
  const star = document.createElement("div");
  star.className = "star";
  star.textContent = text;

  star.style.left = Math.random() * 80 + "%";
  star.style.top = Math.random() * 80 + "%";
  star.style.background =
    ["#A8C3A0", "#AFC6E9", "#E9D66B"][Math.floor(Math.random() * 3)];

  constellation.appendChild(star);
  makeDraggable(star);
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    createStar(input.value);
    input.value = "";
  }
});

function makeDraggable(el) {
  let offsetX, offsetY;

  el.onmousedown = function(e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    document.onmousemove = function(e) {
      el.style.left = e.pageX - constellation.offsetLeft - offsetX + "px";
      el.style.top = e.pageY - constellation.offsetTop - offsetY + "px";
    };

    document.onmouseup = function() {
      document.onmousemove = null;
    };
  };
}
