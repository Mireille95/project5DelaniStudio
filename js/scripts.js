
 /* ---------------- toggling the paragraph----------------*/

 $(document).ready(function() {
    $("#a , #d").click(function() {
      $(".walrus-hidden1").toggle();
      $("#d").toggle();
    
    
    });
  });
  $(document).ready(function() {
    $("#b, #e").click(function() {
        $(".walrus-hidden2").toggle();
      $("#e").toggle();
    });
  });
  $(document).ready(function() {
    $("#c, #f").click(function() {
        $(".walrus-hidden3").toggle();
      $("#f").toggle();
    
    
    });
  });

  /*---------------- about form ----------------*/

  var email =document.getElementById("email");
 var lname =document.getElementById("name");
 var message =document.getElementById("message");
 console.log(name);
 document.getElementById("green").addEventListener("click",function(){
   alert("you did it : "  +lname.value  +", thanks for your comments");
 });
/*----------------for the first pic-------------*/
$('.content').hide();
$('#nu').animate({
  opacity:0.4
});
$('#nu').hover(function(){
  $(this).stop().animate({
    opacity:.3},50);
  $('.content').fadeIn();
},
function(){
  $(this).stop().animate({
    opacity:0.3},50);
  $('.content').fadeOut();
});

/*-----------------------second image-----------------*/

$('.content1').hide();
$('#na').animate({
  opacity:0.4
});
$('#na').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content1').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content1').fadeOut();
});

/*-----------------------third image-----------------*/

$('.content2').hide();
$('#ni').animate({
  opacity:0.4
});
$('#ni').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content2').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content2').fadeOut();
});

/*-----------------------fourth image-----------------*/

$('.content3').hide();
$('#ne').animate({
  opacity:0.4
});
$('#ne').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content3').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content3').fadeOut();
});

/*-----------------------fifth image-----------------*/

$('.content4').hide();
$('#no').animate({
  opacity:0.4
});
$('#no').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content4').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content4').fadeOut();
});

/*-----------------------sixth image-----------------*/

$('.content5').hide();
$('#noo').animate({
  opacity:0.4
});
$('#noo').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content5').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content5').fadeOut();
});

/*-----------------------seventh image-----------------*/

$('.content6').hide();
$('#nee').animate({
  opacity:0.4
});
$('#nee').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content6').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content6').fadeOut();
});
/*-----------------------second image-----------------*/

$('.content7').hide();
$('#nuu').animate({
  opacity:0.4
});
$('#nuu').hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.content7').fadeIn();
},
function(){
  $(this).stop().animate({opacity:.1},400);
  $('.content7').fadeOut();
});


































  // $(function(){
  //     $('#image1').hover(function(){
  //         $(this).width(1.25 * $(this).width());
  //         $(this).height(1.25 * $(this).height());
  //     },
  //     function(){
  //       $(this).width(0.8 * $(this).width());
  //       $(this).height(0.8 * $(this).height());
  //     });
  // });
//   $(document).ready(function() {
//       $("#a").click(function() {
//         $(".walrus-showing").toggle();
//         $(".walrus-hidden").toggle();
//       });
//     });
  


    // $(document).ready(function() {
    //             $(".footer").submit(function(event) {
    //               var footer = ["name", "email", "message"];
        
    //               footer.forEach(function(blank) {
    //                 var userInput = $("input." + blank).val();
    //                 console.log(userInput);
    //                 $("." + blank).text(userInput).val();
    //               });
        
    //             //   $("#story").show();
        
    //               event.preventDefault();
    //             });
    //           });