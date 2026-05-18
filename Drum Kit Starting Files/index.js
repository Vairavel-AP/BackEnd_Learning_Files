var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i < numberOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "w":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "a":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "s":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "d":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/tom1.mp3");
                crash.play();
                break;
        }
    });
}

document.addEventListener("keypress", function(event) {
    var keyPressed = event.key;
    switch (keyPressed) {
        case "l":    
            var crash = new Audio("sounds/crash.mp3");  
            crash.play();
            break;
        case "w":   
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;
        case "k":
            var crash = new Audio("sounds/tom1.mp3");
            crash.play();
            break;
    }
});
