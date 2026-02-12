// List of games. Add more by following this format.
const games = [
    {
        title: "2048",
        thumb: "https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg",
        url: "https://playpager.com/embed/2048/index.html"
    },
    {
        title: "Hextris",
        thumb: "https://hextris.io/images/og-image.png",
        url: "https://hextris.io/hextris/"
    },
    {
        title: "Chess",
        thumb: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=150",
        url: "https://playpager.com/embed/chess/index.html"
    }
];

const grid = document.getElementById('gameGrid');
const modal = document.getElementById('gameModal');
const frame = document.getElementById('gameFrame');

// Load games onto the page
function loadGames(gameList) {
    grid.innerHTML = "";
    gameList.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.thumb}" alt="${game.title}">
            <p>${game.title}</p>
        `;
        card.onclick = () => openGame(game.url);
        grid.appendChild(card);
    });
}

function openGame(url) {
    frame.src = url;
    modal.style.display = "block";
}

function closeGame() {
    modal.style.display = "none";
    frame.src = ""; // Stop the game audio/logic when closed
}

function filterGames() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = games.filter(g => g.title.toLowerCase().includes(term));
    loadGames(filtered);
}

// Initial Load
loadGames(games);