const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const searchResultsContainer = document.getElementById('searchResults');

function searchMovies(query) {
    const movies = [
        { title: "Sex Life", image: "img/r-trend.webp" },
        { title: "Love Affairs in the Afternoon", image: "img/r-trend2.webp" },
        { title: "Normal People", image: "img/r-trend3.webp" },
        { title: "The Walking Dead", image: "img/r-trend4.webp" },
        { title: "The Forbidden Play", image: "img/r-movie.webp" },
        { title: "Gannibal", image: "img/r-movie2.webp" },
        { title: "Serial Experiments Lain", image: "img/r-movie3.webp" },
        { title: "Not Me", image: "img/r-movie4.webp" },

    ];

    const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(query));

    displayResults(searchResults);
}

function displayResults(results) {
    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p id="NullResult">No results found.</p>';
        return;
    }

    results.forEach(result => {
        const listItem = document.createElement('li');

        const imageElement = document.createElement('img');
        imageElement.src = result.image;
        imageElement.alt = result.title;
        listItem.appendChild(imageElement);

        const textElement = document.createElement('span');
        textElement.textContent = result.title;
        listItem.appendChild(textElement);

        searchResultsContainer.appendChild(listItem);
    });
}

// Handle form submission
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = queryInput.value.toLowerCase();
    searchMovies(query);
});

// Handle input changes
queryInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    searchMovies(query);
});

// Hide search results on blur
queryInput.addEventListener('blur', function () {
    searchResultsContainer.innerHTML = ''; // Clear results when input loses focus
});