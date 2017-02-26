import "reflect-metadata";
import * as BadyParser from "body-parser";
import * as cors from "cors";
import * as containers from "./container.config";
import { InversifyExpressServer } from "inversify-express-utils";

let container = containers.getContainer();

let server = new InversifyExpressServer(container, null, { rootPath: "/api" });

server.setConfig(app => {
    app.use(BadyParser.urlencoded({ extended: false }));
    app.use(BadyParser.json());
    app.use(cors());
});

let app = server.build();

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server rodando na porta: " + port);
});