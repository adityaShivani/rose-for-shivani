// const memories = document.querySelectorAll(".memory");
// const btn = document.getElementById("continue");

// function reveal(){
//   let visibleCount=0;

//   memories.forEach(m=>{
//     const rect=m.getBoundingClientRect();

//     if(rect.top < window.innerHeight - 80){
//       m.classList.add("show");
//       visibleCount++;
//     }
//   });

//   if(visibleCount===memories.length){
//     btn.style.display="block";
//   }
// }

// window.addEventListener("scroll",reveal);
// reveal();

// btn.onclick=()=>{
//   window.location.href="valentine.html";
// };


const memories = document.querySelectorAll(".memory");
const btnContainer = document.getElementById("dayButtons");

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
    btnContainer.style.display="block";
  }
}

window.addEventListener("scroll",reveal);
reveal();

function openDay(page){
  window.location.href = page;
}
