const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Transformation functions
function reversetext(text) {
  let reversed = text.split("")
  reversed.reverse()
  return reversed.join("")

};

function wordcount(text) {
  let words = text.trim().split(/\s+/)
  return words.length
};

function isvalid(text) {
  if (text == null || !text || typeof text !== "string") {
    return false;
  }
  else {
    return true;
  }
};

// API routes
app.post("/api/reverse", (req, res) => {
  const text = req.body.text

  if (!isvalid(text)) {
    return res.status(400).json({
      error: "Invalid input"
    });
  }

  res.json(reversetext(text))

});

app.post("/api/wordcount", (req, res) => {
  const text = req.body.text
  if (!isvalid(text)) {
    return res.status(400).json({
      error: "Invalid input"
    });
  }

  res.json(wordcount(text))

});

app.listen(PORT, () => {
  console.log(`String Utility API listening on port ${PORT}`);
});
