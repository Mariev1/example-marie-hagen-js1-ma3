const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b762d9f71d2042c693e43c7cea99413c";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;
    const tags = results.games_count;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div><h2>${games[i].name}</h2><p>${games[i].rating}</p></div>`;
    }

}

getGames();