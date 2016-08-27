const Express = require("express");
const peopleController = require("./Controllers/peopleController");

exports.getRoutes = getRoutes;

function getRoutes() {
    let router = Express.Router();

    router.get("/people", peopleController.getAll);
    router.get("/people/:name", peopleController.getByName);

    router.post("/person", peopleController.post);
    router.route("/person/:id")
        .get(peopleController.getById)
        .put(peopleController.put)
        .delete(peopleController.delete);

    return router;
}