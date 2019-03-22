const GameDatabase = require("../models/GameDatabase");

module.exports = function (app) {
    app.post("/api/session", function (req, res) {
        User.findOne(req.body)
            .then(function (data) {
                if (data._id) {
                    res.json(data);
                }
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.post("/api/user", function (req, res) {
        User.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser)
            })
            .catch(function (err) {
                res.status(400).json(err);
            });
    });

    // app.get("/api/gamedb/:id", function (req, res) {
    //     GameDatabase.find({
    //         category: req.params.id
    //     })
    //         .then(function (data) {
    //             res.json(data);
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
    // });
};
