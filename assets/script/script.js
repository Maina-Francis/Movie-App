//API KEY 68215e02536f64517172acad103660ce
// API URL = https://api.themoviedb.org/3/discover/movie?api_key=68215e02536f64517172acad103660ce&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=68215e02536f64517172acad103660ce&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate";

//Image path provided in the tmdb chat forum https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
const imagePath = "https://image.tmdb.org/t/p/w1280/";

async function getMovies() {
  // The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code.
  const response = await fetch(apiUrl);
  const responseData = await response.json();

  console.log(responseData);

  //Getting the movie images and appending it to the body
  //   responseData.results.forEach((movie) => {
  //     let image = document.createElement("img");
  //     image.src = imagePath + movie.poster_path;

  //     document.body.appendChild(image);
  //   });

  return responseData;
}

getMovies();
