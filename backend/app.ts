const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World from the server! ");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
