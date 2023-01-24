const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const port = 8080;
const filename = __dirname + "/area.json";
const { v4: uuidv4 } = require("uuid");

//Middleware
app.use(express.json()); //for parsing application/json
app.use(cors()); //for configuring Cross-Origin Resource Sharing (CORS)
function log(req, res, next) {
  console.log(req.method + " Request at" + req.url);
  next();
}
app.use(log);

//Endpoints
app.get("/profs", function (req, res) {
  fs.readFile(filename, "utf8", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(data);
  });
});

app.get("/profs/:id", function (req, res) {
  fs.readFile(filename, "utf8", function (err, data) {
    const dataAsObject = JSON.parse(data)[req.params.id];
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(dataAsObject));
  });
});

app.put("/profs/:id", function (req, res) {
  fs.readFile(filename, "utf8", function (err, data) {
    let dataAsObject = JSON.parse(data);
    dataAsObject[req.params.id].name = req.body.name;
    dataAsObject[req.params.id].description = req.body.description;
    dataAsObject[req.params.id].type = req.body.type;
    dataAsObject[req.params.id].rating = req.body.rating;
    fs.writeFile(filename, JSON.stringify(dataAsObject), () => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(dataAsObject));
    });
  });
});

app.delete("/profs/:id", function (req, res) {
  fs.readFile(filename, "utf8", function (err, data) {
    let dataAsObject = JSON.parse(data);
    dataAsObject.splice(req.params.id, 1);
    fs.writeFile(filename, JSON.stringify(dataAsObject), () => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(dataAsObject));
    });
  });
});

app.post("/profs", function (req, res) {
  fs.readFile(filename, "utf8", function (err, data) {
    let dataAsObject = JSON.parse(data);
    dataAsObject.push({
      id: dataAsObject.length,
      name: req.body.name,
      lat: req.body.lat,
      lng: req.body.lng,
      description: req.body.description,
      type: req.body.type,
      rating: req.body.rating,
    });
    fs.writeFile(filename, JSON.stringify(dataAsObject), () => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(dataAsObject));
    });
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
