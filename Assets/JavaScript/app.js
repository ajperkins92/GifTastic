// Checking to see if the JavaScript document is ready and linking properly
console.log("Welcome to the Giftastic Gif generator!");

// Global Variables

// Starting Gifs
var buttonWords = ["Baseball", "Football", "Basketball", "Hockey", "Cricket", "Rugby", "Wrestling", "Badminton", "Table Tennis", "Longboarding"];
var APIKey = "dHi75xUi9DvdwyvQZjjGM9I9GU5t17KM";
var buttonGatheringSpace = $("#buttonGatheringSpace");
var gifGatheringSpace = $("#gifGatheringSpace");

console.log("Here are the  button terms: " + buttonWords);

// Rendering Buttons Function (called on later)
function renderButtons() {
    buttonGatheringSpace.empty();

    for (i = 0; i < buttonWords.length; i++) {
        var button = $("<button>");
        button.attr("data-search", buttonWords[i]);
        button.text(buttonWords[i]);
        button.addClass("btn btn-primary mr-1 mb-1 clickable-search-button");
        buttonGatheringSpace.append(button);
    };
};

// Function specifying that when any of the gif topic buttons are clicked, the values in the buttons will be queried against the GIPHY API
$(document).on("click", ".clickable-search-button", function (event) {
    gifGatheringSpace.empty();
    event.preventDefault();
    var searchedWord = $(this).attr("data-search");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedWord + "&api_key=" + APIKey + "&limit=10";
    console.log("Clicked on: " + searchedWord);

    // Querying the GIPHY API
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        // Setting response to its own variable
        var buttonResults = response.data;

        // Needing to step through each gif in the response data
        for (i = 0; i < buttonResults.length; i++) {
            var gifDiv = $("<div>");
            var gifImg = $("<img>");
            var rating = $("<h3 class='rating'>").text("Rating: " + buttonResults[i].rating);
            gifImg.attr("src", buttonResults[i].images.fixed_height_still.url);
            gifImg.attr("data-still", buttonResults[i].images.fixed_height_still.url);
            gifImg.attr("data-animate", buttonResults[i].images.fixed_height.url);
            gifImg.attr("data-state", "still");
            gifImg.addClass("stateChange");
            rating.attr("src", buttonResults[i].images.rating);
            gifDiv.addClass("gif");
            gifDiv.prepend(rating);
            gifDiv.append(gifImg);
            gifGatheringSpace.append(gifDiv);
        }
    });
});


// This is the function that captures the data inputted by the user.
$("#submit").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#userGifInput").val().trim();

    console.log("The term that was searched: " + searchTerm);

    buttonWords.push(searchTerm);

    $("#userGifInput").val("");
    renderButtons();
});

// Function allowing gifs to change state on click
$(document).on("click", '.stateChange', function () {
    console.log("Clicked on a gif to change its state!");
    var state = $(this).attr("data-state");

    if (state == "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    };


});

// Making sure all buttons are rendered
renderButtons();



