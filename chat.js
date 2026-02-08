const chat = document.getElementById("chatBox");
const next = document.getElementById("next");

const messages = [
  {text:"Hey", type:"me"},
  {text:"I wanted to tell you something", type:"me"},
  {text:"But I never found the right moment", type:"me"},
  {text:"So I made this instead", type:"me"},
  {text:"Because sometimes code is easier than words", type:"me"},
  {text:"You became my favorite notification", type:"me"},
  {text:"And my longest thought of the day", type:"me"},
  {text:"There is something I want to show you...", type:"me"}
];

let i=0;

function addMessage(){
  if(i>=messages.length){
    next.style.display="block";
    return;
  }

  const msg=document.createElement("div");
  msg.className=`msg ${messages[i].type}`;
  msg.innerText=messages[i].text;
  chat.appendChild(msg);

  setTimeout(()=>msg.classList.add("show"),50);

  i++;
  setTimeout(addMessage,1200);
}

addMessage();

next.onclick=()=>{
  window.location.href="memories.html";
};