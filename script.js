const constellation = document.getElementById("constellation");
const addBtn = document.getElementById("addValue");
const input = document.getElementById("valueInput");

document.querySelectorAll(".star").forEach(makeDraggable);

addBtn.onclick = () => {
  if(input.value.trim()){
    const star = document.createElement("div");
    star.className = "star";
    star.innerText = input.value;
    star.style.left = Math.random()*70 + "%";
    star.style.top = Math.random()*70 + "%";
    constellation.appendChild(star);
    makeDraggable(star);
    input.value = "";
  }
};

function makeDraggable(el){
  let offsetX, offsetY;

  el.onmousedown = function(e){
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    document.onmousemove = function(e){
      el.style.left = e.pageX - constellation.offsetLeft - offsetX + "px";
      el.style.top = e.pageY - constellation.offsetTop - offsetY + "px";
    };

    document.onmouseup = function(){
      document.onmousemove = null;
    };
  };
}
