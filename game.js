var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;


$(".btn1").click(function(event) {

  if (!started) {
    $(
      "#level-title"
    ).text("level " + level);
    playSound("begin");
    setTimeout(function() {
      playSound("start1");
    }, 4000);

    setTimeout(function() {
      nextSequence();
    }, 7500);
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }


  } else {

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");

    }, 200);
    $("h1").text("Game Over,Pess Any Key to Restart");

    setTimeout(function() {
      playSound("wrong1");
    }, 500);
    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("level " + level);
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);



  var choosenButton = $("#" + randomChosenColour);
  choosenButton.fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  // animatePress(randomChosenColour);

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");

  }, 100);
}
