'use strict';

var addTask = document.getElementById('button-addon2')
var inputText = document.querySelector('.input-t');
var txt1, div1, el

//Add task
var AddTask1 = function(){
    txt1= inputText.value

    if(txt1 === ""){
        alert('Input field is empty!')
    }
    else{
        // console.log(txt1);

        div1 = document.createElement('div');
        // par.textContent = txt1
        div1.innerHTML = '<p class="listP"><button class="check" onclick="checkBtn(this.parentNode)">&check;</button>'
        + txt1
        +'<button class="close1" onclick="closeBtn(this.parentNode)">&#x2715</button></p>'
        div1.classList.add('standard')
        el = document.querySelector('.todo-list');
        el.appendChild(div1)
        inputText.value = ''
    }
   
}
addTask.addEventListener('click', AddTask1)



//Done Task
function checkBtn(div1){
    div1.classList.add('checked')
}

//Delete Task
function closeBtn(div1){
    // div1.classList.add('fall')
    div1.remove()    
}

//Enter key adds task
document.addEventListener('keydown', function(e){

    if(e.key === 'Enter'){ 
        // console.log('Ent was pressed');
        AddTask1()
    }
});