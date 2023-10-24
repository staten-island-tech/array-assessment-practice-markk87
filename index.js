const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: [1861],
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: [1868],
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];






//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((nombre) => {
  console.log(nombre.authorFirst + " " + nombre.authorLast + " wrote " + nombre.name + " in " + nombre.publishDate)
});

//Sort books from oldest to most recent
const ordered = books.sort(function(book1, book2){
  return book1.publishDate - book2.publishDate;
});

console.log(ordered);
//sort books alphabetically
const alphabet = titles.sort();

console.log(alphabet);
//Find who wrote War and Peace
const bookTitle = "War and Peace";
const WarAndPeace = books.find((biblio) => biblio.name === bookTitle);

if (WarAndPeace) {
  const authro = `${WarAndPeace.authorFirst} ${WarAndPeace.authorLast}`;
  console.log(`${bookTitle} was written by ${authro}`);
} 
else {
  console.log(`${bookTitle} was not found in the list of books`);
}


//how many books were written before 1900?
const before1900 = books.filter((book) => book.publishDate < 1900);
const countbefore1900 = before1900.length;

console.log(`There are ${countbefore1900} books written before 1900`)

console.log(filtered);
//was there at least one book published within the last 100 years?
const filtered2 = books.filter((element) => element.publishDate > "1923" && element.publishDate < "2023" );

console.log(filtered2);
//was every book published within the last 100 years? 
const currentYear = new Date().getFullYear();

const isPublishedWithinLast100Years = books.every((libro) => {
  return currentYear - libro.publishDate <= 100
});

if (isPublishedWithinLast100Years == true) {
  console.log("Yes, every book was published within the last hundred years");
}
else {
  console.log("No, not every book was published in the last hundred years");
};
//print a list of books that "includes" the genre historical - ???????????????????
const historicalBooks = books.filter((book) => book.genre.includes("historical"));

historicalBooks.forEach((book) => 
  console.log(book.name)
)