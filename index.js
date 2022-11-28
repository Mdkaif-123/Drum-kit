// This is a new method of addEventListener here we passes the Keypress, so when the key is pressed it 
// calles the function.

document.addEventListener("keypress", function(event) {
    makeSound(event.key); // This function taking the event key and passing to make sound function 
    //where it checks it has same input as case then it palys

    buttonAnimation(event.key); // It also calls another function which is buttonAnimation 
});

//First we created a event that act when a particular element is called.

// This for loop is used to add events to all the button.

for(let i=0; i<=document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", func);// event listener has parameter of clicked and a function

//This function is created to catch the button which is clicked.
    function func(){
        var button = this.innerHTML;// button gets the Inner HTML of this event or button which is pressed.
        makeSound(button);// Then make sound function is called.
        buttonAnimation(button);// This function is created to add animation to the button
    }

}




//This function makes sound and having a parameter "key" having the parameter pass to .
// It is made with switch case and play the sound according to.

function makeSound(key){
    switch (key) { // Javascript switch case
        case "w":  
            var tom1 = new Audio('sounds/tom-1.mp3'); // Playing audio in Js.
            tom1.play(); // Play function is predefined which palys the sound in the source.
            break;
    
            case "a":  
            var kick = new Audio('sounds/kick-bass.mp3');//same....
            kick.play();
            break;
    
            case "s":  
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
    
            case "d":  
            var snare = new Audio('sounds/tom-1.mp3');
            snare.play();
            break;
    
            case "j":  
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
            case "k":  
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
            case "l":  
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
        default:
            console.log(button);//It is default statement 
            break;
    }
}

//This is a function having the key which is passed and add the aniamtion to the selected button.
function buttonAnimation(currentKey){

    var activeButton =   document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");// .pressed class is added to the currentKey button.

    setTimeout(function(){
    activeButton.classList.remove("pressed");//.pressed class is removed to the currentKey button.
   },100 /*this is the time delay of 0.1 second */)
}