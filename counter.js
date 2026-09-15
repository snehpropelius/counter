let count = 0;

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