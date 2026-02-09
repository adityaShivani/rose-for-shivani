const memories=document.querySelectorAll(".memory");
const btn=document.getElementById("continue");

function reveal(){
 let visible=0;
 memories.forEach(m=>{
  if(m.getBoundingClientRect().top<window.innerHeight-80){
    m.classList.add("show"); visible++;
  }
 });
 if(visible===memories.length) btn.style.display="block";
}
window.addEventListener("scroll",reveal);
reveal();

btn.onclick=()=>location.href="valentine.html";

