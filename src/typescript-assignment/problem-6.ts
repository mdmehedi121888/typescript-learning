//-------------question----------
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2019,
};

const book2: Book = {
  title: "Another Book",
  author: "Jane Doe",
  publishedYear: 2010,
};

const isRecentBook = (book: Book): boolean => {
  const currentYear = new Date().getFullYear();
  return (
    book.publishedYear >= currentYear - 5 && book.publishedYear <= currentYear
  );
};
console.log(isRecentBook(book1));
console.log(isRecentBook(book2));
