
 $(document).ready(function() {
    $("#a , #d").click(function() {
        $(".walrus-hidden").toggle();
      $("#d").toggle();
    
    
    });
  });
  $(document).ready(function() {
    $("#b, #e").click(function() {
        $(".walrus-hidden").toggle();
      $("#e").toggle();
   
     
    
    });
  });
  $(document).ready(function() {
    $("#c, #f").click(function() {
        $(".walrus-hidden").toggle();
      $("#f").toggle();
    
    
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