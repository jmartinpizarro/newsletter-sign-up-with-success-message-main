const initButton = document.querySelector(".btn");
const closeButton = document.querySelector(".btn-close");
const frontCard = document.querySelector(".front");
const backCard = document.querySelector(".back");
const errorMessage = document.querySelector(".error");
const spanToChange = document.getElementById("toChange");

const errorFormSpan = getComputedStyle(document.documentElement).getPropertyValue('--errorFormSpan');
const errorFormBackground = getComputedStyle(document.documentElement).getPropertyValue("--errorFormBackground");




initButton.addEventListener("click", function(e){
    e.preventDefault(); // sin esto, al tener el form la página se recarga directamente
    isValid = checkForm();
    const form = document.getElementById("email");
    if (isValid === false){ // la implementación de estilos sería mucho más sencilla de haber hecho una clase y hacer toggle
        errorMessage.style.display = "block";
        form.style.backgroundColor = errorFormBackground;
        form.style.color = errorFormSpan;
        form.style.borderColor = errorFormSpan; 
    } else {
        errorMessage.style.display = "none";
        form.style.backgroundColor = "white";
        form.style.color = "black";
        form.style.borderColor = "black";

        frontCard.style.display = "none";
        backCard.style.display = "flex";

        updateBackCard();
    }

});

closeButton.addEventListener("click", function(){
    backCard.style.display = "none";
})

function checkForm(){
    const form = document.getElementById("email");
    const inputValue = form.value;
    var output = String(inputValue)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (Array.isArray(output)){
        return true;
    } else {
        return false;
    }
};

function updateBackCard(){
    const inputValue = document.getElementById("email").value;
    spanToChange.innerHTML = inputValue;
}
