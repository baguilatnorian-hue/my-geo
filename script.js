
document.getElementById("surveyForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Thank you! Your survey request has been received.";

    this.reset();

});
