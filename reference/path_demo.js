const path = require("path");

// Base file name : path_demo.js
console.log(path.basename(__filename));

// Directory name : */sideProjs/node_crash_course/reference
console.log(path.dirname(__filename));

// File extension : .js
console.log(path.extname(__filename));

// Create path object : object of root, dir, base, ext, and name
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
