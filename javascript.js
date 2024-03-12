const lightSwitch = document.querySelector("#lightSwitch");
const lightImage = document.querySelector("#lightImage");

let isLightOn = false;

lightSwitch.addEventListener('click', function () {
    if (isLightOn) {
        lightImage.src = "off.png";
        isLightOn = false;
    } else {
        lightImage.src = "on.png";
        isLightOn = true;
    }
    console.log(isLightOn);
})