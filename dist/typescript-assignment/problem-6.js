"use strict";
const book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2019,
};
const book2 = {
    title: "Another Book",
    author: "Jane Doe",
    publishedYear: 2010,
};
const isRecentBook = (book) => {
    const currentYear = new Date().getFullYear();
    return (book.publishedYear >= currentYear - 5 && book.publishedYear <= currentYear);
};
console.log(isRecentBook(book1));
console.log(isRecentBook(book2));
