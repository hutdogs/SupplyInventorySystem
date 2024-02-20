const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const searchResultsContainer = document.getElementById('searchResults');

function searchMovies(query) {
    const movies = [
        { title: "Avegers Infinity War", image: "img/avengers.webp" },
        { title: "Doctor Slump", image: "img/docSlump.webp" },
        { title: "Harry Potter", image: "img/harryPotter.webp" },
        { title: "Classroom of the Elite", image: "img/g-anime.webp" },
        { title: "Mashle: Magic and Muscles", image: "img/g-anime2.webp" },
        { title: "Shangri-La Frontier", image: "img/SLF.webp" },
        { title: "Tokyo Revengers 3", image: "img/tokyoRev3.webp" },
        { title: "Twilight", image: "img/twilight.webp" },
        { title: "The Marvels", image: "img/theMarvels.webp" },


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