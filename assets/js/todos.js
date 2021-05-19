// click works on existing elements and on works for dynamic events too
// check that diiference on Web Development course on Classroom

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      //fadeOut( timer,function)
      //this "this" refers to the li
      $(this).remove();
    });
  //this will stop bubbling of the event to the outer level
  event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var todoList = $(this).val();
    $(this).val("");
    //create a new li and append to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'> </i></span>" + todoList + "</li>"
    );
  }
});
$(".fa-plus").click(function () {
  $("input[type='text'").fadeToggle();
});
