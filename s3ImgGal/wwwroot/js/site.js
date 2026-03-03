// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
async function loadRandomImage() {
    // Fetch the JSON from your Flask server
    const response = await fetch('http://127.0.0.1:5000/getImage');
    // Parse the JSON response
    const data = await response.json();
    // Set the image src to the link from the response
    document.getElementById('randomImage').src = data.link;
}

window.onload = loadRandomImage;