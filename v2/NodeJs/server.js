const Express = require("express");
const Http = require("http");
const BadyParser = require("body-parser");
const Routes = require("./routes");
const cors = require("cors");

let app = Express();
app.use(BadyParser.urlencoded({ extended: false }));
app.use(BadyParser.json());
app.use(cors());

let routes = Routes.getRoutes();

app.use("/api", routes);

let port = process.env.PORT || 8080;
Http.createServer(app).listen(port, function () {
    console.log("Magic happens on port " + port);
});