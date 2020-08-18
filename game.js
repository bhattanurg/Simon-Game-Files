var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
  var level=0;

for(var i=0;i<document.querySelectorAll(".btn").length;i++)
{
document.querySelectorAll(".btn")[i].addEventListener("click", function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
 console.log(userClickedPattern);
});
}


function nextSequence() {
  level++;

    $("h1").text("level " + level);
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);



  var choosenButton = $("#" + randomChosenColour);
  choosenButton.fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
animatePress(randomChosenColour);

}
//
// $(".btn").click(function(){
//   var userChosenColour = $(this).attr("id");
//
//   userClickedPattern.push(userChosenColour);
//   // console.log(userClickedPattern);
// });
//



function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
              $("#" + currentColour).removeClass("pressed");

      }, 100);
}
$("body").keydown(function(event){

  $("h1").text("level " + level);
  nextSequence();

})
