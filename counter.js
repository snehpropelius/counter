let count = 0;
document.getElementById("btnadd").addEventListener("click",increaseCount);
document.getElementById("btnminus").addEventListener("click",decreaseCount);
document.getElementById("btnreset").addEventListener("click",reset);
document.getElementById("btnsave").addEventListener("click",savecount);
document.getElementById("btnload").addEventListener("click",loadCount);

function updateCounter(){
    document.getElementById('counter').innerHTML=count;
}

function increaseCount(){
    count++;
    updateCounter();
}

function decreaseCount(){
    if(count>0){
        count--;
    }
    updateCounter();
}

function reset(){
    count = 0;
    updateCounter();
}

function savecount(){
    localStorage.setItem("count",count);
}

function loadCount(){
    let saved = localStorage.getItem("count");
    if(saved != null){
        count = saved;
    }
    updateCounter();
}