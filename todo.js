//creating
document.querySelector('#submit').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
else{
        document.querySelector('#tasks').innerHTML += 
        `<div class="task">
            <span id="taskname" contentEditable='true'>
            <input type="checkbox" name="check" class="check">
                ${document.querySelector('#newtask input').value}
            </span> 
            <button class='delete'>
            <i class="far fa-trash-alt"></i>
            </button>
        </div>`
        document.querySelector('#newtask input').value='';

        //delete
var toDoTask=document.querySelectorAll('.delete');
for(i=0;i<toDoTask.length;i++){
    toDoTask[i].onclick=function(){
        this.parentNode.remove()
    }
}

  //text-box      
var checkboxes = document.querySelectorAll('.check');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        this.parentNode.classList.toggle('completed', checkbox.checked);
        })
})
}
}



  



