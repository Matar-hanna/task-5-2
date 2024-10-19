const num=document.querySelector('.Value');
const firstUnit=document.querySelector('.fUnit');
const secondUnit=document.querySelector('.sUnit');
const calculateBtn=document.querySelector('.calculate');
const resulSpant=document.querySelector('.result');

function calculate(){
let result=0;

if(firstUnit.value=='m' &&secondUnit.value=='km'){
result=num.value/1000;
}else if(firstUnit.value=='km' &&secondUnit.value=='m'){
result=num.value*1000;
}
if(firstUnit.value=='cm' &&secondUnit.value=='km'){
result=num.value/1000000;
}else if(firstUnit.value=='km' &&secondUnit.value=='cm'){
result=num.value*1000000;
}
if(firstUnit.value=='cm' &&secondUnit.value=='m'){
result=num.value/1000;
}
if(firstUnit.value=='m' &&secondUnit.value=='cm'){
result=num.value*1000;
}


resulSpant.innerHTML=result+secondUnit.value


    
}





calculateBtn.addEventListener('click',calculate)
