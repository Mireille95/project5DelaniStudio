
 $(document).ready(function() {
    $("img").click(function() {
      $("p").show();
    
    });
  });
  $(document).ready(function() {
      $(".clickable").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
    });


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