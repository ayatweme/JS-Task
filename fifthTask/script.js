document.addEventListener("DOMContentLoaded", function () {
    var clickableElement = document.getElementById("clickableElement");

    clickableElement.addEventListener("click", function () {
        clickableElement.style.backgroundColor = "yellow";
        clickableElement.style.fontWeight = "bold";
    });
});

function changeFlag() {
    var countrySelector = document.getElementById("countrySelector");
    var flagImage = document.getElementById("flagImage");

    var selectedCountry = countrySelector.value;

    switch (selectedCountry) {

        case "canada":
            flagImage.src = "canada-flag.png";
            break;
        case "uk":
            flagImage.src = "uk-flag.png";
            break;
        case "usa":
            flagImage.src = "usa-flag.png";
            break;
        default:
            flagImage.src = "default-flag.png";
            break;
    }
}

function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMessage = document.getElementById("passwordMessage");
    var submitButton = document.getElementById("submitButton");

    if (password.length < 6) {
        passwordMessage.textContent = "Too short.";
        submitButton.style.display = "none";
    } else if (password !== confirmPassword) {
        passwordMessage.textContent = "The two Passwords don't match.";
        submitButton.style.display = "none";
    } else {
        passwordMessage.textContent = "";
        submitButton.style.display = "block";
    }
}

function submitForm() {
    alert("Form submitted successfully!");
}

function toggleAnswer(boxId) {
    var answer = document.getElementById("answer" + boxId.charAt(boxId.length - 1));
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

function changeFontSize() {
    var textInput = document.getElementById("textInput");
    var fontSize = document.getElementById("fontSize").value + "px";
    textInput.style.fontSize = fontSize;
}

function changeFontType() {
    var textInput = document.getElementById("textInput");
    var fontType = document.getElementById("fontType").value;
    textInput.style.fontFamily = fontType;
}

function toggleItalic() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontStyle = document.getElementById("italicCheckbox").checked ? "italic" : "normal";
}

function toggleBold() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = document.getElementById("boldCheckbox").checked ? "bold" : "normal";
}

function toggleUnderline() {
    var textInput = document.getElementById("textInput");
    textInput.style.textDecoration = document.getElementById("underlineCheckbox").checked ? "underline" : "none";
}
var colors = ["red", "green", "blue", "yellow", "purple", "orange"];
var currentColorIndex = 0;

function changeBoxColor() {
    var colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

changeBoxColor();
setInterval(changeBoxColor, 2000);