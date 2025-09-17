const express = require("express");
const app = express();
const port = 3000;

// public ফোল্ডারকে স্ট্যাটিক ফাইলের জন্য ব্যবহার করবো
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});
