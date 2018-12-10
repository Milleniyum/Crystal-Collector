var wins = 0, losses = 0, score = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function newGame() {
    $("#score").text(score);
    $("#random-num").text(getRandomNumber(19, 120));
    $("#gem-1").val(getRandomNumber(1, 12));
    $("#gem-2").val(getRandomNumber(1, 12));
    $("#gem-3").val(getRandomNumber(1, 12));
    $("#gem-4").val(getRandomNumber(1, 12));
};

newGame();