$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;
    var blueOne = Math.floor(Math.random() * 11) + 1;
    var greenOne = Math.floor(Math.random() * 11) + 1;
    var orangeOne = Math.floor(Math.random() * 11) + 1;
    var goldOne = Math.floor(Math.random() * 11) + 1;
    var computerRandom = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    function winDetermined() {
        if (computerRandom === score) {
            wins++;
            $("#win").html(wins);
            reset();
        } else if (score > computerRandom) {
            losses++;
            $("#loss").html(losses);
            reset();
        }
    }

    function reset() {
        score = 0;
        blueOne = Math.floor(Math.random() * 11) + 1;
        greenOne = Math.floor(Math.random() * 11) + 1;
        orangeOne = Math.floor(Math.random() * 11) + 1;
        goldOne = Math.floor(Math.random() * 11) + 1;
        computerRandom = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $(".score").empty();
        $("#computer-guess").html("<h2>" + computerRandom + "</h2>");

    }


    $("#1").on("click", function() {
        score += goldOne;
        console.log(score);
        $(".score").html("<h1>" + score + "</h1>");
        winDetermined();
    });

    $("#2").on("click", function() {
        score += orangeOne;
        console.log(score);
        $(".score").html("<h1>" + score + "</h1>");
        winDetermined();
    });

    $("#3").on("click", function() {
        score += greenOne;
        $(".score").html("<h1>" + score + "</h1>");
        winDetermined();
    });

    $("#4").on("click", function() {
        score += blueOne;
        $(".score").html("<h1>" + score + "</h1>");
        winDetermined();
    });

    $("#computer-guess").html("<h2>" + computerRandom + "</h2>");

});