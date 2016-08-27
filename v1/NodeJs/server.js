var Express = require("express");
var Http = require("http");
var BadyParser = require("body-parser");
var Routes = require("./routes");

var app = Express();
app.use(BadyParser.urlencoded({ extended: false }));
app.use(BadyParser.json());

var router = Routes.config();

app.use("/api", router);

var port = process.env.PORT || 8080;

Http.createServer(app).listen(port, function () {
    console.log("Magic happens on port " + port);
});