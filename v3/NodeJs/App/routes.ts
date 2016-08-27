import * as Express from "express";
import * as peopleController from "./Controllers/peopleController";

export function getRoutes(): Express.Router {
    let router = Express.Router();

    router.get("/people", peopleController.getAll);
    router.get("/people/:name", peopleController.getByName);

    router.post("/person", peopleController.post);
    router.route("/person/:id")
        .get(peopleController.getById)
        .post(peopleController.post)
        .put(peopleController.put)
        .delete(peopleController.deletePerson);

    return router;
}