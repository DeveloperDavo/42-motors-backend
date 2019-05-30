const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({
    actions: [
      { type: "UNLOCK", time: 1558985702333, status: "PENDING" },
      { type: "LOCK", time: 1558985698238, status: "FAILED" },
      { type: "UNLOCK", time: 1557945991480, status: "COMPLETE" },
      { type: "LOCK", time: 1557945949433, status: "COMPLETE" }
    ]
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
