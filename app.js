
$("#addTaskBtn").on('click',function(){

    //THIS IS GRABBING VALUE OF USER INPUT
    let taskItem = $("#inputBox").val().trim();
    
    //THIS IS ADDING THE VALUE OF THE INPUT INTO THE  ARRAY
    listArray.push(taskItem);

    //THIS IS CLEARING THE TEXT ON INPUT  BOX
    $("#inputBox").val("");

    renderTodos(listArray);

})

//THIS FUNCTION WILL LOOP THROUGH  ARRAY ITEMS AND DISPLAY THEM ON THE PAGE
function renderTodos(listArray){

    $("#taskCont").empty(); 

for(var i = 0; i < listArray.length; i++){
    let toDoItem = $('<p>');
    toDoItem.text(listArray[i]);

    let toDoCompleted = $('<button>');
    toDoCompleted.attr('data-to-do', i);
    toDoCompleted.addClass("checkbox");
    toDoCompleted.text("✓");

    toDoItem = toDoItem.prepend(toDoCompleted);

    $("#taskCont").append(toDoItem);
}

localStorage.setItem("toDoList",JSON.stringify(listArray));


}

//THIS FUNCTION WILL DELETE THE TO ITEMS WHEN THE TODOBUTTON  IS CLICKED

$(document).on('click','.checkbox',function(){

let dataAttr = $(this).attr('data-to-do');

listArray.splice(dataAttr,1);

renderTodos(listArray);

localStorage.setItem("toDoList",JSON.stringify(listArray));


})

let listArray  = JSON.parse(localStorage.getItem("toDoList"));


if (!Array.isArray(listArray)) {
    listArray = [];
  }

  renderTodos(listArray);

