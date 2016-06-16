$(document).ready(function(){
  function count_elements(element_selector){
    el_count=$(element_selector).length;
    return el_count
  }

  window.setInterval(function(){
  no_todo = count_elements(".section1 .task");
  $(".to_do_count .inner_no").html(no_todo);
  no_progess = count_elements(".section2 .task");
  $(".progress_count .inner_no").html(no_progess);
}, 1000);
function accordion_set(){
  $(".task").find("div").slideUp();
}

    $("button").click(function(event){
    event.preventDefault();
    var inputInner = $("#name").val();
    var descriptionInner = $("#description").val();
    var priorityInner = $('#priority option:selected').val();
    var dateInner = $('#datepicker').val();
    $(".section1").append("<div class='task'><h3><span>" + inputInner + "</span><i class='fa fa-trash-o' aria-hidden='true'></i><i class='fa fa-caret-square-o-down' aria-hidden='true'></i></h3><div><span><b>Description:</b> " + descriptionInner+"</span><br><span><b>Priority:</b> " + priorityInner + "</span><br><span><b>Date:</b> "+dateInner+"</span></div></div>");
    $(".task").draggable({
      revert:"invalid"
    });
    accordion_set();
    $("#name").val("");
    $("#description").val("");
    $("#datepicker").val("");
  });

  $(function() {
      $( "#datepicker" ).datepicker();
    });

    $('body').on('click', '.fa.fa-trash-o', function() {
    $(this).parent().parent().hide( "highlight", {color: '#8b0c06;'},500 , function() {
    $(this).remove();});
});
$('body').on('click', '.fa-caret-square-o-down', function() {
$(this).parent().parent().find("div").slideToggle();
});


    $( ".task" ).draggable({
      revert:"invalid"
    });

    $( ".section1, .section2, .section3" ).droppable({
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      accept: "div.task",
      drop: function( event, ui ) {
        ui.draggable.fadeOut();

        ui.draggable.appendTo($( this )).css({"left":"0","top":0}).show("clip",200);

      }
    });

});


//testowe

var resizing = false;
moveNavigation();
$(window).on('resize', function(){
 if( !resizing ) {
 	window.requestAnimationFrame(moveNavigation);
 	resizing = true;
 }
});

function moveNavigation(){
 var mq = checkMQ(); //this function returns mobile,tablet or desktop

 if ( mq == 'mobile' && topNavigation.parents('.cd-side-nav').length == 0 ) { //topNavigation = $('.cd-top-nav')
 detachElements();
 topNavigation.appendTo(sidebar); //sidebar = $('.cd-side-nav')
 searchForm.prependTo(sidebar);
 } else if ( ( mq == 'tablet' || mq == 'desktop') && topNavigation.parents('.cd-side-nav').length > 0 ) {
 detachElements();
 searchForm.insertAfter(header.find('.cd-logo')); //header = $('.cd-main-header')
 topNavigation.appendTo(header.find('.cd-nav'));
 }
 resizing = false;
}

function detachElements() {
 topNavigation.detach();//topNavigation = $('.cd-top-nav')
 searchForm.detach();//searchForm = $('.cd-search')
}

//testowe koniec
