
var adviceGen = function(result) {
  if (result > 4){
    var advice = "Seek immediate help!";
    return advice;
  } else if (result <= 4) {
    var advice = "You're normal";
    return advice;
  }
};

$(document).ready(function() {
  $("form#stress_test").submit(function(event) {
    event.preventDefault();
    
    $("#output").show();
    $("#stress_test").hide();

    var counterWarnings = 0;
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      counterWarnings++;
    });

    var counterSymptoms = 0
    $("input:checkbox[name=symptoms]:checked").each(function(){
      counterSymptoms++;
    });

    var counterCope = 0
    $("input:checkbox[name=cope]:checked").each(function(){
      counterCope++;
    });


    var badResult = counterWarnings + counterSymptoms;
    var totalResult = badResult - counterCope;

    $("#adviceOutput").append("<p>" +"Your total score is " + totalResult + "</p>" + "<br>");
    var advice = adviceGen(totalResult);
    $("#adviceOutput").append(advice);

  });
});
