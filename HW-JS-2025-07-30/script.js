document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-button");
    const container = document.getElementById("main-container");

    startBtn.addEventListener("click", function () {
        startBtn.style.display = "none";
        container.style.backgroundColor = "blue";
        startGame();
    });
});

function startGame() {
    let wins = 0;

    while (!confirm("Готові до гри? Натисніть OK, щоб почати.")) {}

    alert("Починаємо гру! Виграй 3 раунди, щоб перемогти.");

    while (wins < 3) {
        const target = Math.floor(Math.random() * 10);
        let guess = null;

        while (guess !== target) {
            const input = prompt("Вгадай число від 0 до 9:");
            if (input === null) {
                alert("Гру перервано.");
                return;
            }

            guess = parseInt(input);
            if (isNaN(guess) || guess < 0 || guess > 9) {
                alert("Будь ласка, введіть число від 0 до 9.");
                continue;
            }

            if (guess < target) {
                alert("Більше!");
            } else if (guess > target) {
                alert("Менше!");
            } else {
                wins++;
                alert(`Правильно! Виграно раундів: ${wins}/3`);
                if (wins < 3) {
                    alert("Готуємо наступний раунд...");
                }
            }
        }
    }

    alert("Вітаємо! Ви виграли 3 раунди та завершили гру!");

    document.getElementById("main-container").style.display = "none";
    document.getElementById("bsod").style.display = "block";
}
