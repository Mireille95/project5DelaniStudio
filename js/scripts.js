
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
$(".form").submit(function(event){
  var lemail =document.getElementById("email");
  var lname =document.getElementById("name");
  var lmessage =document.getElementById("message");
  if (lname == "" || lemail == "" || lmessage ==""){
    alert("you didnt fill the form");
  }
  else {
    alert("you did it : "  +lname.value  +", thanks for your comments");
  }
  event.preventDefault();
});
  
 console.log(name);
 document.getElementById("green").addEventListener("click",function(){
   alert("you did it : "  +lname.value  +", thanks for your comments");
 });
/*----------------for the first pic-------------*/
$('.content').hide();
$('#nu').animate({
  opacity:1
});
$('#nu').hover(function(){
  $(this).stop().animate({
    opacity:.4},200);
  $('.content').fadeIn();
},
function(){
  $(this).stop().animate({
    opacity:1},500);
  $('.content').fadeOut();
});

/*-----------------------second image-----------------*/

$('.content1').hide();
$('#na').animate({
  opacity:1
});
$('#na').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content1').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content1').fadeOut();
});

/*-----------------------third image-----------------*/

$('.content2').hide();
$('#ni').animate({
  opacity:1
});
$('#ni').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content2').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content2').fadeOut();
});

/*-----------------------fourth image-----------------*/

$('.content3').hide();
$('#ne').animate({
  opacity:1
});
$('#ne').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content3').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content3').fadeOut();
});

/*-----------------------fifth image-----------------*/

$('.content4').hide();
$('#no').animate({
  opacity:1
});
$('#no').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content4').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content4').fadeOut();
});

/*-----------------------sixth image-----------------*/

$('.content5').hide();
$('#noo').animate({
  opacity:1
});
$('#noo').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content5').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content5').fadeOut();
});

/*-----------------------seventh image-----------------*/

$('.content6').hide();
$('#nee').animate({
  opacity:1
});
$('#nee').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content6').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
  $('.content6').fadeOut();
});
/*-----------------------second image-----------------*/

$('.content7').hide();
$('#nuu').animate({
  opacity:1
});
$('#nuu').hover(function(){
  $(this).stop().animate({  opacity:.4},200);
  $('.content7').fadeIn();
},
function(){
  $(this).stop().animate({  opacity:1},500);
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