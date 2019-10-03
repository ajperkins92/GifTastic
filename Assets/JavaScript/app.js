// Checking to see if the JavaScript document is ready and linking properly
console.log("Welcome to the Giftastic Gif generator!");

// Global Variables

// Starting Gifs
var startingGifs = ["Baseball", "Football", "Basketball", "Hockey", "Cricket", "Rugby", "Wrestling", "Badminton", "Table Tennis", "Longboarding"];
var submittedGifs = [];
var APIKey = "dHi75xUi9DvdwyvQZjjGM9I9GU5t17KM";
var queryURL = "https://api.giphy.com/v1/gifs/search";
var buttonGatheringSpace = $("#buttonGatheringSpace");
var gifGatheringSpace = $("#gifGatheringSpace");

console.log("Here are the starting button terms: " + startingGifs);
console.log("Here are the submitted button terms: " + submittedGifs);


// Rendering Buttons
function renderButtons() {
    buttonGatheringSpace.empty();

    for (i = 0; i < startingGifs.length; i++) {
        var button = $("<button>");
        button.attr("data-search", startingGifs[i]);
        button.text(startingGifs[i]);
        button.addClass("btn btn-primary");
        buttonGatheringSpace.append(button);
    };

    if (submittedGifs.length > 1) {
        var button = $("<button>");
        button.attr("data-search", submittedGifs[i]);
        button.text(submittedGifs[i]);
        button.addClass("btn btn-primary");
        buttonGatheringSpace.append(button);
    };
};

// API Call and Response



