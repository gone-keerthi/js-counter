console.log('hello');
var data= 0;
document.getElementById('A').innerText=data;
function increment(){
    data=data+1;
    data=data<0?0:data;
    document.getElementById('A').innerText=data;
}
function decrement(){
    data= data-1;
    data=data<0?0:data;
    document.getElementById('A').innerText=data;
}

function reset(){
    data=0
    document.getElementById('A').innerText=data;
}