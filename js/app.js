// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


//PAGE SIDE IN VIEW

 $(function(){
    var $page_trigger = $(".page-trigger")

    $page_trigger.on("click", function(event){
      
      var page_trigger_id = $(this).data('page-trigger-id');

      event.preventDefault();
     $(".main-view").hide();
     $('#page-trigger-id-' + page_trigger_id).show().addClass('animated slideInRight');;
    });

    $(".side-view .main-view-trigger").on("click", function(event){
      event.preventDefault();
      $(".side-view").hide();
      $(".main-view").show().addClass('animated slideInLeft');;
    });

  });