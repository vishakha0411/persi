let require:any;
let fs=require("fs");
// let fs: any = require("fs");

// Define the Book class structure
class Book {
    title: string;
    authorName: string;
    publishedDate: string;
    subDescription: string;
    likes: number;

    constructor(title: string, authorName: string, publishedDate: string, subDescription: string, likes: number) {
        this.title = title;
        this.authorName = authorName;
        this.publishedDate = publishedDate;
        this.subDescription = subDescription;
        this.likes = likes;
    }
}

// Function to search for books by authorName
function searchBooksByAuthor(books: Book[], authorName: string): void {
    let foundBooks = books.filter(book => book.authorName === authorName);

    if (foundBooks.length === 0) {
        console.log(`No books available for the authorname : ${authorName}.`);
    } else {
        foundBooks.forEach(book => {
            console.log(JSON.stringify(book));
        });
    }
}

// Read the input from input.txt
fs.readFile("input.txt", "utf-8", function(err: any, data: string) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Split the input into two parts: list of books and author name
    let lines = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);

    let booksList = JSON.parse(lines[0]) as Book[];
    let authorNameToSearch = lines[1];

    // Call the search function with the book list and the author name to search
    searchBooksByAuthor(booksList, authorNameToSearch);
});


/*
[{"title":"Harry Potter and the Philosopher's Stone","authorName":"JKRowling","publishedDate":"2019/06/01","subDescription":"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.","likes":100},{"title":"The Stand","authorName":"Stephen King","publishedDate":"2019/06/15","subDescription":"The Stand is a post-apocalyptic horror/fantasy novel by American author Stephen King. It expands upon the scenario.....","likes":900},{"title":"Beloved","authorName":"Toni Morrison","publishedDate":"2019/06/15","subDescription":"Beloved is a 1987 novel by the American writer Toni Morrison. Set after the American Civil War (1861–65) ...","likes":100},{"title":"Sula","authorName":"Toni Morrison","publishedDate":"2014/11/12","subDescription":"Sula is a 1973 novel by Nobel Prize-winning author Toni Morrison, her second to be published after ...","likes":900}]
Toni Morrison

*/