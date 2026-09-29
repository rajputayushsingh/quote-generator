const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");
const favoriteButton = document.getElementById("favorite");
const copyButton = document.getElementById("copy");
const favoritesContainer = document.getElementById("favorites");

let currentQuote = {
    quote: "",
    author: ""
};

async function getQuote() {
    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        const data = await response.json();

        currentQuote.quote = data.quote;
        currentQuote.author = data.author;

        quoteElement.textContent = `"${data.quote}"`;
        authorElement.textContent = `— ${data.author}`;

    } catch (error) {

        quoteElement.textContent =
            "Unable to fetch quote.";

        authorElement.textContent = "";

        console.error(error);
    }
}

async function addFavorite() {

    if (!currentQuote.quote) {
        alert("Please generate a quote first.");
        return;
    }

    try {

        const response = await fetch("/api/quotes/favorites", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(currentQuote)

        });

        if (response.ok) {

            alert("Quote added to favorites ❤️");

            loadFavorites();

        } else {

            alert("Failed to save quote.");

        }

    } catch (error) {

        console.error(error);

    }
}

async function loadFavorites() {

    try {

        const response =
            await fetch("/api/quotes/favorites");

        const favorites = await response.json();

        favoritesContainer.innerHTML = "";

        if (favorites.length === 0) {

            favoritesContainer.innerHTML =
                "<p>No favorite quotes yet.</p>";

            return;
        }

        favorites.forEach((item) => {

            const div = document.createElement("div");

            div.className = "favorite-item";

            div.innerHTML = `
                <p>"${item.quote}"</p>
                <strong>— ${item.author}</strong>
                <br>

                <button onclick="copyFavorite('${escapeQuotes(item.quote)}')">
                    📋 Copy
                </button>

                <button onclick="deleteFavorite('${item._id}')">
                    🗑️ Delete
                </button>
            `;

            favoritesContainer.appendChild(div);

        });

    } catch (error) {

        console.error(error);

    }
}

copyButton.addEventListener("click", async () => {

    if (!currentQuote.quote) {
        alert("Generate a quote first.");
        return;
    }

    const text =
        `"${currentQuote.quote}" — ${currentQuote.author}`;

    await navigator.clipboard.writeText(text);

    alert("Quote copied 📋");

});

async function copyFavorite(quote) {

    await navigator.clipboard.writeText(quote);

    alert("Quote copied 📋");
}

async function deleteFavorite(id) {

    try {

        await fetch(`/api/quotes/favorites/${id}`, {
            method: "DELETE"
        });

        loadFavorites();

    } catch (error) {

        console.error(error);

    }
}

function escapeQuotes(text) {

    return text
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");

}

newQuoteButton.addEventListener("click", getQuote);

favoriteButton.addEventListener("click", addFavorite);

getQuote();
loadFavorites();