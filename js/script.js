console.log("script.js loaded");
const apiKey = "YOUR_API_KEY_HERE";

let endpoint = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${apiKey}&limit=10`;

async function fetchGifs() {
    let response = await fetch(endpoint);
    let data = await response.json();

    let images = data.data.map(gif => gif.images.original.url);

    console.log(images); // check your data
    return images;
}


