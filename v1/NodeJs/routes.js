var Express = require("express");
var peopleController = require("./Controllers/peopleController");

exports.config = config;

function config() {
    var router = Express.Router();

    router.get("/people", peopleController.getAll);
    router.get("/people/:name", peopleController.getByName);

    router.post("/person", peopleController.post);
    router.route("/person/:id")
        .get(peopleController.getById)
        .put(peopleController.put)
        .delete(peopleController.delete);

    return router;
}