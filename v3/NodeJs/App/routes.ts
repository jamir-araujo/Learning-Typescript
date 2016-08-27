import * as Express from "express";
import * as peopleController from "./Controllers/peopleController";

export function config(app: Express.Application) {
    let router = Express.Router();

    router.get("/people", peopleController.getAll);
    router.get("/people/:name", peopleController.getByName);

    router.post("/person", peopleController.post);
    router.route("/person/:id")
        .get(peopleController.getById)
        .post(peopleController.post)
        .put(peopleController.put)
        .delete(peopleController.deletePerson);

    app.use("/api", router);
}