//check off todos by clicking
// add a click listener to the entire UL parent
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

// click on X to delete todo
$("ul").on("click", "span", function(event){
    //.parent() gives us parent (li) and removes
    $(this).parent().fadeOut(500, function() {
        //removes parent(li)
        $(this).remove();
    });
    //stops from bubbling up parent levels
    event.stopPropagation();
})

$('input[type="text"]').keypress(function(event) {
    if(event.which === 13){
        // grabbing newTodo text from input
        let todoText = ($(this).val());
        //makes input box back to empty
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

