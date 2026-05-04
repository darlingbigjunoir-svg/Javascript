let bulbOn = document.getElementById("bulbon");
let bulbOff = document.getElementById("bulboff");

bulbOn.addEventListener('click', changePicture);
bulbOff.addEventListener('click', changePicture);


function changePicture() {
    if (bulbOff.style.display == "none") {
        bulbOff.style.display = "block";
        bulbOn.style.display = "none";
    } else {
        bulbOff.style.display = "none";
        bulbOn.style.display = "block";
    }
}