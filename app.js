var bucketList=[];
var listItem=document.getElementById("list-container");
let value=document.getElementById("input-field");


value.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("add").click();
     let value=document.getElementById("input-field");
    bucketList.push(value.value);
    showList();
    value.value="";
    }
  });


function showList(){
    listItem.innerHTML="";
    for(let i=0;i<bucketList.length;i++){
        let li=document.createElement("li");
        li.innerHTML=bucketList[i]+`<span><img src="https://etc.usf.edu/clipart/41700/41724/fc_mult_41724_sm.gif" class="checked" onclick="remove(`+i+`)"></span>`;
        li.classList="list";
        listItem.appendChild(li);
    }
}

function reset(){
    bucketList=[];
    showList();
}

function remove(i){
    bucketList.splice(i,1);
        showList();
    
}