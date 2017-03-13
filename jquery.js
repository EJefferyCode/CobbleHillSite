/*stack1*/

$(document).ready(function(){
    $("#p1").hover(function(){
       $("#stack1").slideToggle(400);
        
    });    
});

/*Stack2*/

$(document).ready(function(){
    $("#p2").hover(function(){
       $("#stack2").slideToggle(400);
        
    });    
});

/*stack3*/

$(document).ready(function(){
    $("#p3").hover(function(){
       $("#stack3").slideToggle(400);
        
    });    
});



/**********************************************Accordion Menu***************************************/

var accordion = $("#accordion");

accordion.find('dd').hide();

accordion.find('dt').on('click', function(){
    $(this).next('dd').slideToggle().siblings('dd:visible').slideUp();
    
});














