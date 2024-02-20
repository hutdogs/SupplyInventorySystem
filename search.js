const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const searchResultsContainer = document.getElementById('searchResults');

function searchMovies(query) {
    const movies = [
        { title: "The Shawshank Redemption", image: "img/avengers.webp" },
        { title: "The Godfather", image: "img/docSlump.webp" },
        { title: "The Dark Knight", image: "harryPotter.webp" },
        { title: "Pulp Fiction", image: "pulp_fiction.jpg" },
        { title: "Fight Club", image: "fight_club.jpg" },
        { title: "Forrest Gump", image: "forrest_gump.jpg" },
        { title: "Inception", image: "inception.jpg" },
        { title: "The Matrix", image: "matrix.jpg" },
        { title: "The Lord of the Rings: The Fellowship of the Ring", image: "lotr_fellowship.jpg" },
        { title: "Schindler's List", image: "schindlers_list.jpg" }
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