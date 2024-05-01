//Constant Variables
const API_KEY = "Jhix7po6LYwDg4QAKxyg5T1Og9bWax2P";
const API_PREFIX = "https://api.giphy.com/v1/gifs/search?api_key=";
const API_SETTINGS = "offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// Function Definitions
function formSubmitted(event) {
    event.preventDefault();
    let inputFieldContent = document.querySelector("[name = memeSearch]").value;
    getMemes(inputFieldContent);
}

function renderGifs(response) {
    let result = '';

    for (let meme of response.data) {
        result += `
        <img src = "${meme.images.original.url}" alt = "${meme.alt_text}" />
        `
    }

    document.querySelector(".js-memes-box").innerHTML = result;
}

function getMemes(searchExpression) {
    fetch(`${API_PREFIX}${API_KEY}&q=${searchExpression}&limit=25&${API_SETTINGS}`).then(data => data.json())
    .then(renderGifs);
}

//Event Listener
document
.querySelector('#memeBar')
.addEventListener('submit', formSubmitted);