var wins = 0, losses = 0, score, randNum;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function newGame() {
    score = 0;
    randNum = getRandomNumber(19, 120);
    $("#random-num").text(randNum);
    $("#gem-1").val(getRandomNumber(1, 12));
    $("#gem-2").val(getRandomNumber(1, 12));
    $("#gem-3").val(getRandomNumber(1, 12));
    $("#gem-4").val(getRandomNumber(1, 12));
    $("#score").text(score);
};

$(".gem").on("click", function () {
    score += parseInt($(this).val());
    $("#score").text(score);
    $("#result").text("");

    if (score === randNum) {
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#result").text("You Won!");
        newGame();
    } else if (score > randNum) {
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#result").text("You Lost!");
        newGame();
    };
});

newGame();