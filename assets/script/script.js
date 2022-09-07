//API KEY 68215e02536f64517172acad103660ce
// API URL = https://api.themoviedb.org/3/discover/movie?api_key=68215e02536f64517172acad103660ce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=68215e02536f64517172acad103660ce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

//Search api link
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=68215e02536f64517172acad103660ce&query=";

//Image path provided in the tmdb chat forum https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
const imagePath = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");

//get most popular movies initially
getMovies(apiUrl);
async function getMovies(url) {
  // The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code.
  const response = await fetch(url);
  const responseData = await response.json();

  console.log(responseData);

  //Getting the movie images and appending it to the body

  //   responseData.results.forEach((movie) => {
  //     let image = document.createElement("img");
  //     image.src = imagePath + movie.poster_path;

  //     document.body.appendChild(image);
  //   });

  //alternatively appending the images to the body after specifying its css properties

  // responseData.results.forEach((movie) => {
  //   let movieElement = document.createElement("div");
  //   movieElement.className = "movies";

  //   movieElement.innerHTML = `
  //       <img
  //       src="${imagePath + movie.poster_path}" alt="${movie.title}" />

  //     <div class="movie-details">
  //       <h3>${movie.title}</h3>
  //       <span>${movie.vote_average}</span>
  //     </div>`;

  //   main.appendChild(movieElement);
  // });

  searchMovies(responseData.results);
}

// Handle the search inputs
const form = document.getElementById("form");
const search = document.getElementById("search");

function searchMovies(movies) {
  // clear the main
  main.innerHTML = "";

  movies.forEach((movie) => {
    // Create a div element
    let movieElement = document.createElement("div");

    // give the div a class name movies
    movieElement.classList.add("movies");

    movieElement.innerHTML = `
        <img
        src="${imagePath + movie.poster_path}" alt="${movie.title}" />

      <div class="movie-details">
        <h3>${movie.title}</h3>
        <span>${movie.vote_average}</span>
      </div>`;

    main.appendChild(movieElement);
  });
}

form.addEventListener("submit", (event) => {
  //prevent automatic form submission
  event.preventDefault();

  const searchTerm = search.value;

  console.log(`This is the value of the searchTerm: ${searchTerm}`);

  if (searchTerm) {
    searchMovies(searchAPI + searchTerm);
    search.value = "";
  }
});
