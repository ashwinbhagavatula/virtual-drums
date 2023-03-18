var buttons = document.querySelectorAll(".drum")
for(var i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",handleClick);
}

function handleClick(){
    makeSound(this.innerHTML);
    buttonPress(this.innerHTML);
}

document.addEventListener("keydown", (event)=>{
    buttonPress(event.key);
    makeSound(event.key);
});


function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/kick-drum.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}


function buttonPress(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout(()=>{activeKey.classList.remove("pressed")},100);
}