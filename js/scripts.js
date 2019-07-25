
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
  $(function(){
      $('#image1').hover(function(){
          $(this).width(1.25 * $(this).width());
          $(this).height(1.25 * $(this).height());
      },
      function(){
        $(this).width(0.8 * $(this).width());
        $(this).height(0.8 * $(this).height());
      });
  });
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