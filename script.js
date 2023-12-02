$(document).ready(function() {
    var apiUrl = "https://v2.jokeapi.dev/joke/Programming";

    function fetchJoke() {
        $.getJSON(apiUrl, function(data) {
            if (data.type === "twopart") {
                var jokeCard = `<div class="joke-card">
                                    <p>${data.setup}</p>
                                    <p>${data.delivery}</p>
                                </div>`;
                $("#joke-container").html(jokeCard);
            } else {
                $("#joke-container").html("<p>No joke available.</p>");
            }
        });
    }
    fetchJoke();
    $("#fetch-joke-btn").on("click", fetchJoke);
});
