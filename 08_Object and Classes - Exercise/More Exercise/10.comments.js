function manageComments(commands) {
    let users = new Set();
    let articles = new Set();
    let comments = {};

    for (let command of commands) {
        if (command.startsWith("user ")) {
            let username = command.split("user ")[1];
            users.add(username);
        } else if (command.startsWith("article ")) {
            let articleName = command.split("article ")[1];
            articles.add(articleName);
        } else if (command.includes(" posts on ")) {
            let [username, rest] = command.split(" posts on ");
            let [articleName, comment] = rest.split(": ");
            let [commentTitle, commentContent] = comment.split(", ");

            if (users.has(username) && articles.has(articleName)) {
                if (!comments[articleName]) {
                    comments[articleName] = [];
                }
                comments[articleName].push({ username, commentTitle, commentContent });
            }
        }
    }

    let sortedArticles = Object.entries(comments).sort((a, b) => b[1].length - a[1].length);

    for (let [article, articleComments] of sortedArticles) {
        console.log(`Comments on ${article}`);
        articleComments
            .sort((a, b) => a.username.localeCompare(b.username))
            .forEach((comment) => {
                console.log(
                    `--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`
                );
            });
    }
}

// Example Usage
manageComments([
    "user aUser123",
    "someUser posts on someArticle: NoTitle, stupidComment",
    "article Books",
    "article Movies",
    "article Shopping",
    "user someUser",
    "user uSeR4",
    "user lastUser",
    "uSeR4 posts on Books: I like books, I do really like them",
    "uSeR4 posts on Movies: I also like movies, I really do",
    "someUser posts on Shopping: title, I go shopping every day",
    "someUser posts on Movies: Like, I also like movies very much",
]);

manageComments([
    "user Mark",
    "Mark posts on someArticle: NoTitle, stupidComment",
    "article Bobby",
    "article Steven",
    "user Liam",
    "user Henry",
    "Mark posts on Bobby: Is, I do really like them",
    "Mark posts on Steven: title, Run",
    "someUser posts on Movies: Like",
]);