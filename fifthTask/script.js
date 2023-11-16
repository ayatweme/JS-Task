document.addEventListener("DOMContentLoaded", function () {
    var clickableElement = document.getElementById("clickableElement");

    clickableElement.addEventListener("click", function () {
        // Change background color to yellow
        clickableElement.style.backgroundColor = "yellow";

        // Make the font bold
        clickableElement.style.fontWeight = "bold";
    });
});
