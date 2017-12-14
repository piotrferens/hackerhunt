const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => console.log("Listening on port 8000"));

app.get("/pages/:page", (req, res) => {
  console.log(req.params);
  request(`https://hackerhunt.co/api/daily/${req.params.page}`, function(
    error,
    response,
    body
  ) {
    res.send(response.body);
  });
});
