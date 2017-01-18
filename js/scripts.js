var answer;

function checker(item) {
  if (typeof(item) != "number") {
    answer = "not a number";
  } else if (item < 0) {
    answer = "no BC dates please.";
  } else if (item % 100 === 0) {
    if (item % 400 === 0) {
      answer = "It is a leap year";
    } else {
      answer = "not a leap year";
    }
  } else if (item % 4 === 0) {
    answer = "It is a leap year";
  } else {
    answer = "not a leap year";
  }
  console.log("answer is " + answer);
  return answer;
}

$(document).ready(function() {
  $("form#leap-form").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var item = parseInt($("#tbox").val());
    checker(item);
    $("#output").append("<p>" + answer + "</p>");
    console.log(item);
    answer = ""
  });
});
