
let input = document.getElementById("input");
let button = document.getElementById("button")
let cards = document.getElementById("cards")

button.addEventListener("click", displayWeather);

function displayWeather(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
    xhr.send();

    xhr.responseType = "json";
    xhr.onload = function () {
        if (xhr.status !== 200) {
            alert(`Error ${xhr.status} : ${xhr.statusText}`);
        } else {
            var weather = xhr.response;

            let card = document.createElement("div");
            card.classList.add("card");

            let h3 = document.createElement("h3");
            h3.innerHTML = input.value;
            card.appendChild(h3);

            let h2 = document.createElement("h2");
            h2.innerHTML = weather.main.temp;
            card.appendChild(h2);

            let img = document.createElement("img");
            img.src = "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
            card.appendChild(img);

            let p = document.createElement("p");
            p.innerHTML = weather.weather[0].description;
            card.appendChild(p);

            cards.appendChild(card);
        }
    };
    xhr.onerror = function () {
        alert("Request failed");
    }
}
