// this is the same as running `use mongoBasics` from the
// shell
var db = db.getSiblingDB('mongoBasics');

// delete any data that was there already
db.dropDatabase();

// create fake names for our users
var firstNames = ['Elia', 'Amanda', 'Max', 'Sara', 'Ayden', 'Frank'];
var lastNames = ['Lund', 'Noor', 'Riola', 'Henderson', 'Zhang'];
var usersRaw = [];

// Give all users a first name, and a signup date
// give 5 out of 6 users a last name
for (var i = 0; i < firstNames.length; i++) {
    var user = {
        name: {
            first: firstNames[i],
            last: lastNames[i]
        },
        signupDate: new Date()
    };
    usersRaw.push(user);
}

// insert the users into the database
// in the `users` collection
db.users.insert(usersRaw);

// find all users and assign them to the variable 'authors'
var authors = db.users.find().toArray();

var titles = ['Beach Tidepools!', 'Vacay at Disneyland!', 'SWEET Desserts!', 'On a CRUISE'];
var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
var body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

var postsRaw = [];

// Create posts from our fake titles
// give each post an author which is the `_id` of
// a random user from the authors array

for(var i = 0; i < titles.length; i++) {
    var post = {
        title: titles[i],
        description: description,
        body: body,
        author: authors[Math.floor(Math.random() * authors.length)]._id
    }
    postsRaw.push(post);
}

// insert posts into posts collection
db.posts.insert(postsRaw);
