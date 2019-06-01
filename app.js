const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/actions", (req, res) =>
  res.json({
    actions: [
      { type: "LOCK", time: 1558985702333, status: "PENDING" },
      { type: "LOCK", time: 1558985698238, status: "FAILED" },
      { type: "UNLOCK", time: 1557945991480, status: "COMPLETE" },
      { type: "LOCK", time: 1557945949433, status: "COMPLETE" }
    ]
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
