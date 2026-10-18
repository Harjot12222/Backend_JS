const express = require("express");

const app = express();

const PORT = 3000;

let data = [];

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.status(200).json(data);
});

app.post("/tasks", (req, res) => {

  data.push({
    id: req.body.id,
    title: req.body.title
  });
  res.status(201).json(data)
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = data.findIndex(task =>
    task.id === id
  );
  if (index == -1) {
    return res.status(404).json({
      error: "Task does not exist."
    })
  } else {
    data.splice(index, 1);
    res.status(200).json({
      message: "Task Deleted."
    })
  };
});


app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
