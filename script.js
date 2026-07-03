const values = [
  "Beauty","Function","Care","Clarity",
  "Emotion","Access","Justice","Play"
];

const marqueeTrack = document.getElementById("marqueeTrack");
const constellation = document.getElementById("constellation");
const input = document.getElementById("valueInput");
const addBtn = document.getElementById("addValue");

values.concat(values).forEach(value => {
  const pill = document.createElement("button");
  pill.className = "pill";
  pill.textContent = value;

  pill.onclick = () => addStar(value);

  marqueeTrack.appendChild(pill);
});

function addStar(text){
  const star = document.createElement("div");
  star.className = "star";
  star.textContent = text;

  star.style.left = Math.random()*70 + "%";
  star.style.top = Math.random()*70 + "%";

  const colors = [
    "#d8dfc6",
    "#d8e3f4",
    "#eadc86"
  ];

  star.style.background =
    colors[Math.floor(Math.random()*colors.length)];

  makeDraggable(star);
  constellation.appendChild(star);
}

addBtn.onclick = () => {
  if(input.value.trim()){
    addStar(input.value.trim());
    input.value = "";
  }
};

function makeDraggable(el){
  let isDown = false;
  let offsetX, offsetY;

  el.addEventListener("mousedown", e => {
    isDown = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", e => {
    if(!isDown) return;

    const rect = constellation.getBoundingClientRect();

    el.style.left =
      (e.clientX - rect.left - offsetX) + "px";

    el.style.top =
      (e.clientY - rect.top - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });
}

[
  "empathy",
  "clarity",
  "curiosity",
  "honesty",
  "sustainability",
  "inclusivity"
].forEach(addStar);
