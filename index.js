//Get the number of drum buttons
//Loop through all the drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detects Button clicks and adds event listener to play sound
for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //Get the innerHTML of the button that got clicked
        var buttonInnerHtml = this.innerHTML;

        //Log the innerHTML of the button that got clicked
        console.log("Button Clicked:", buttonInnerHtml);

        //Play the corresponding sound
        makeSound(buttonInnerHtml);

        //Animate the button that got clicked
        buttonAnimation(buttonInnerHtml);
    });
}
// Detects Keyboard key press and adds event listener to play sound
document.addEventListener("keydown", function(event){
    //Play corresponding sound for the key pressed
    makeSound(event.key);

    //Play animation for the key pressed
    buttonAnimation(event.key);
});
//Function to play sound based on the key pressed
    function makeSound(key){
        switch (key) {
            case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;

            case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

            default:console.log("Invalid key:", key);
        }
    }
//Function to animate the button that got clicked
function buttonAnimation(currentKey){
    //Get the button that corresponds to the key that got clicked
    var activeButton = document.querySelector("." + currentKey);

    //If there is a button for the key that got clicked, animate it/add "pressed" class to it
    if (activeButton){
        console.log("Animating:", currentKey);
        activeButton.classList.add("pressed");

        //Remove the "pressed" class after 100ms
        setTimeout(function(){
            activeButton.classList.remove("pressed");
    }, 100);
}else{
    console.log("No button for key:", currentKey);
   }
}