let addtodobutton=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');
addtodobutton.addEventListener('click',function(){
   

    
    var para=document.createElement('p');
    para.classList.add('para-style');
    para.innerText=inputfield.value;
    todocontainer.appendChild(para);
    inputfield.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";

    })
    para.addEventListener('dblclick',function(){
        todocontainer.removeChild(para);
    })
    
})