//your JS code here. If required.
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    let searchDiv = document.querySelector(".search");
    let inputField = document.querySelector(".input");
    let button = document.querySelector(".btn");

    if (button) {  // Ensure button exists before adding event listener
        button.addEventListener("click", function () {
            searchDiv.classList.add("active");
            inputField.focus();
        });
    }
});
