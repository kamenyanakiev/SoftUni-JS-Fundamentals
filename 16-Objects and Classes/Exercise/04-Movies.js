function movies(array) {

  function addMovie(movieName) {
    movies.push({name : movieName});
  }

  function directedBy(movieName, directorName) {
    let foundMovie = movies.find(m => m.name === movieName);
    if (foundMovie) {
      foundMovie.director = directorName;
    }
  }

  function onDate(movieName, date) {
    let foundMovie = movies.find(m => m.name === movieName);
    if (foundMovie) {
      foundMovie.date = date;
    }
  }

  let movies = [];
  for (const element of array) {
    if (element.includes('addMovie')) {
      let splitMovie = element.split('addMovie ');
      let movieName = splitMovie[1];
      addMovie(movieName)
    } else if (element.includes('directedBy')) {
      let [movieName, directorName] = element.split(' directedBy ');
      directedBy(movieName, directorName)
    } else if (element.includes('onDate')){
      let [movieName, date] = element.split(' onDate ');
      onDate(movieName, date)
    }
  }
  for (const movie of movies) {
    if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);