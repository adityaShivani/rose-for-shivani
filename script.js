const textEl = document.getElementById("text");
const btn = document.getElementById("enterBtn");

if(textEl){

const lines = [
  "This page is locked...",
  "Only one person can open it.",
  "Are you Shivani?"
];

let line = 0;
let char = 0;

function type(){
  if(line >= lines.length){
    btn.style.display="block";
    return;
  }

  if(char < lines[line].length){
    textEl.innerHTML += lines[line][char];
    char++;
    setTimeout(type,40);
  }else{
    textEl.innerHTML += "<br><br>";
    line++;
    char=0;
    setTimeout(type,700);
  }
}

type();

btn.onclick=()=>{
  window.location.href="chat.html";
}

}