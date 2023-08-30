/*Instructions

Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
 */


const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifForm = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");

gifForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchQuery = searchInput.value;
    const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${searchQuery}&api_key=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const gifUrl = data.data.images.downsized.url;

            const gifElement = document.createElement("div");
            gifElement.innerHTML = `
                <img src="${gifUrl}" alt="${searchQuery}">
                <button class="deleteBtn">Delete</button>
            `;

            gifContainer.appendChild(gifElement);

            const deleteButton = gifElement.querySelector(".deleteBtn");
            deleteButton.addEventListener("click", function() {
                gifContainer.removeChild(gifElement);
            });
        } else {
            console.error("Error fetching GIF:", xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Request error");
    };

    xhr.send();
});

// Delete all GIFs
const deleteAllButton = document.createElement("button");
deleteAllButton.textContent = "Delete All";
deleteAllButton.addEventListener("click", function() {
    gifContainer.innerHTML = "";
});
gifContainer.appendChild(deleteAllButton);

