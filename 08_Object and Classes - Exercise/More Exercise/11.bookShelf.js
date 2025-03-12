function manageBookShelf(commands) {
    let shelves = {};
    let books = {};

    for (let command of commands) {
        if (command.includes(" -> ")) {
            let [shelfId, shelfGenre] = command.split(" -> ");
            if (!shelves[shelfId]) {
                shelves[shelfId] = shelfGenre;
                books[shelfId] = [];
            }
        } else if (command.includes(": ")) {
            let [bookTitle, rest] = command.split(": ");
            let [bookAuthor, bookGenre] = rest.split(", ");
            for (let shelfId in shelves) {
                if (shelves[shelfId] === bookGenre) {
                    books[shelfId].push({ title: bookTitle, author: bookAuthor });
                    break;
                }
            }
        }
    }

    let sortedShelves = Object.entries(books).sort((a, b) => b[1].length - a[1].length);

    for (let [shelfId, shelfBooks] of sortedShelves) {
        console.log(`${shelfId} ${shelves[shelfId]}: ${shelfBooks.length}`);
        shelfBooks
            .sort((a, b) => a.title.localeCompare(b.title))
            .forEach((book) => {
                console.log(`--> ${book.title}: ${book.author}`);
            });
    }
}

// Example Usage
manageBookShelf([
    "1 -> history",
    "1 -> action",
    "Death in Time: Criss Bell, mystery",
    "2 -> mystery",
    "3 -> sci-fi",
    "Child of Silver: Bruce Rich, mystery",
    "Hurting Secrets: Dustin Bolt, action",
    "Future of Dawn: Aiden Rose, sci-fi",
    "Lions and Rats: Gabe Roads, history",
    "2 -> romance",
    "Effect of the Void: Shay B, romance",
    "Losing Dreams: Gail Starr, sci-fi",
    "Name of Earth: Jo Bell, sci-fi",
    "Pilots of Stone: Brook Jay, history",
]);

manageBookShelf([
    "1 -> mystery",
    "2 -> sci-fi",
    "Child of Silver: Bruce Rich, mystery",
    "Lions and Rats: Gabe Roads, history",
    "Effect of the Void: Shay B, romance",
    "Losing Dreams: Gail Starr, sci-fi",
    "Name of Earth: Jo Bell, sci-fi",
]);