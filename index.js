for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        let btnLetter = document.querySelectorAll(".drum")[i].innerHTML;
        makeSound(btnLetter);
        buttonAnimation(btnLetter);
    });
}
document.addEventListener("keydown", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
});
let makeSound = (char) => {
    let audio;
    switch (char) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
};
let buttonAnimation = (char) => {
    let button = document.querySelector("." + char);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
};
