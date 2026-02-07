const memories = document.querySelectorAll(".memory");
const btn = document.getElementById("continue");

function reveal(){
  let visibleCount=0;

  memories.forEach(m=>{
    const rect=m.getBoundingClientRect();

    if(rect.top < window.innerHeight - 80){
      m.classList.add("show");
      visibleCount++;
    }
  });

  if(visibleCount===memories.length){
    btn.style.display="block";
  }
}

window.addEventListener("scroll",reveal);
reveal();

btn.onclick=()=>{
  window.location.href="valentine.html";
};
