let listItems=[];
const listDiv=document.getElementById("listDiv");
const input=document.getElementById("Task");
const storageKey="listTasks";

function renderItems(){
    listDiv.innerHTML=null;
    for (const[idx,Items] of Object.entries(listItems)){
        const container=document.createElement("div");
        container.style.marginBottom="10px";
        container.style.display="flex";
        


        const text=document.createElement("p");
        text.textContent=Items;
        text.style.display="inline";
        
        const button=document.createElement("button");
        button.textContent="Delete";
        button.style.marginLeft="30px";
     
        button.onclick = () => removeItems(idx);
    
        container.appendChild(text);
        container.appendChild(button);

        listDiv.appendChild(container);
    }
}

function loadItems(){
     const oldTask=localStorage.getItem(storageKey);
     if(oldTask) listItems=JSON.parse(oldTask);
         renderItems();
}

function saveItems(){
    const string=JSON.stringify(listItems);
    localStorage.setItem(storageKey,string);
}

function addItems(){
   const value=input.value;
   if(!value){
    alert("please enter a task");
    return;
   }
   listItems.push(value);
   renderItems();
   input.value="";
   saveItems();
}


function removeItems(idx){
    listItems.splice(idx,1);
    renderItems();
    saveItems();
}
document.addEventListener("DOMContentLoaded",loadItems);