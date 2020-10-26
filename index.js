window.onload = () => {
    document.querySelector('.card').classList.add(randomSuit());
    document.querySelector('.card').innerHTML = randomNumber();
};
let randomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexN = Math.floor(Math.random() * numbers.length);

    return numbers[indexN];
};
let randomSuit = () => {
    let suit = ["spade", "club", "hearts", "diams"];
    let indexS = Math.floor(Math.random() * suit.length);
    return suit[indexS]
};