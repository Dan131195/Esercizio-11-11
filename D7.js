/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("---- Esercizio 1 -----");

function newString(str1, str2) {
  let first = str1.substr(0, 2);
  let last = str2.substr(-3);
  let newString = first + last;
  finalString = newString.toUpperCase();
  return console.log(finalString);
}
newString("Mario", "Aldo");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("---- Esercizio 2 -----");

const random10 = () => {
  const array = []
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 101))
  }
  return array
}

console.log(random10())

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("---- Esercizio 3 -----");

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter1(n) {
  return n.filter((number) => number % 2 === 0);
}

console.log(filter1(numbers2));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("---- Esercizio 4 -----");

const sumNumbers = [1, 2, 3, 4, 5];

function sumArray() {
  let sum = 0;
  sumNumbers.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumArray());

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("---- Esercizio 5 -----");

const sum2 = sumNumbers.reduce((sum, element) => sum + element);

console.log(sum2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("---- Esercizio 6 -----");

const incrementaArray = (array, n) => {
  return array.map((el) => el + n)
}

console.log(incrementaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("---- Esercizio 7 -----");

function map2(stringArray) {
  return stringArray.map((element) => element.length);
}

console.log(map2(["EPICODE", "is", "great"]));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("---- Esercizio 8 -----");

function oddNumbers() {
  const numbersArray = [];
  for (let i = 1; i < 100; i++){
    numbersArray.push(i);
  }
  const oddArray = [];
  numbersArray.forEach((element) => {
    if (element % 2 === 0) {
      oddArray.push(element);
    }
  })
  return oddArray;
}

console.log(oddNumbers());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("---- Esercizio 9 -----");

function oldest(movies) {
  let oldestMovie = movies[0];
  movies.forEach(function (element) {
    if (parseInt(element.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = element;
    }
  });
  return oldestMovie;
}

console.log(oldest(movies));

//-------------------------------------------------------------

function oldest() {
  let oldYear = 2050;
  let oldMovie;
  movies.forEach((element) => {
    let movieYear = parseInt(element.Year);
    if (movieYear < oldYear) {
      oldYear = movieYear;
      oldMovie = { ...element };
    }
  });
  return oldMovie;
}
console.log(oldest());

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("---- Esercizio 10 -----");

function countMovie() {
  return movies.length;
}
console.log(countMovie());

//----------------------------

let movieNumber = movies.length;
console.log(movieNumber);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("---- Esercizio 11 -----");

const titleArray = (array) => {
  return array.map((element) => element.Title);
};
console.log(titleArray(movies));

//-------------------------

const titles = movies.map((element) => {
  return element.Title;
});
console.log(titles);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("---- Esercizio 12 -----");

function filter(array) {
  const newArray = array.filter((element) => {
    return parseInt(element.Year) > 2000;
  });
  return newArray;
}
console.log(filter(movies));

//-----------------------------

const millenium = (array) => {
  return array.filter((element) => {
    return parseInt(element.Year) > 2000;
  });
};
console.log(millenium(movies));

//-------------------------------

const millennialFilm = movies.filter((element) => {
  return parseInt(element.Year) > 2000;
});

console.log(millennialFilm);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("---- Esercizio 13 -----");

const sumYears = () => {
  return movies.reduce((total, movie) => total + parseInt(movie.Year), 0);
};

console.log(sumYears());

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("---- Esercizio 14 -----");

function findmovie(id) {
  return movies.find((element) => element.imdbID === id);
}

console.log(findmovie("tt4154796"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("---- Esercizio 15 -----");

function getMovieByYear(year) {
  return movies.findIndex((element) => parseInt(element.Year) === year);
}

console.log(getMovieByYear(2005));
