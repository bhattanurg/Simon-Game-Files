var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];





function nextSequence() {
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);



  var choosenButton = $("#" + randomChosenColour);
  choosenButton.fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + choosenButton + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
});
