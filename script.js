let count=0;
let saveEl=document.getElementById("save-el");
let countEl=document.querySelector("h2");
function increment(){
    count+=1;
    countEl.textContent=count;
}  
function save(){
    saveEl.textContent+=count+" - ";
    count=0;
    countEl.textContent=0;
}
    