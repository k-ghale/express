const express = require("express");
const app = express();
const people = require("./routes/people.js");
const auth = require("./routes/auth.js");

//static
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Router
app.use("/api/people", people);
//login
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
