import * as Express from "express";
import * as Http from "http";
import * as BadyParser from "body-parser";
import * as Routes from "./routes";
import * as cors from "cors";

let app = Express();
app.use(BadyParser.urlencoded({ extended: false }));
app.use(BadyParser.json());
app.use(cors());

let routes = Routes.getRoutes();

app.use("/api", routes);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server rodando na porta: " + port);
});