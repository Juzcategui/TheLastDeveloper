const Gamedatabase = require("../models/Gamedatabase");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config.json");


module.exports = function (app) {
    app.post('/api/signup', function (req, res) {
        const userData = {
            username: req.body.username,
            password: req.body.password
        };

        User.create(userData).then(function () {
            res.json({ success: true });
        })
            .catch(function (err) {
                res.status(400).json(err);
            });;
    });

    app.post("/api/authenticate", function (req, res) {
        const { username, password } = req.body;
        User.findOne({ username: username })
            .then(function (user) {
                const isValidPass = user.comparePassword(password);
                if (isValidPass) {
                    const token = jwt.sign({ data: user.id }, config.jwtSecret);
                    res.json({
                        id: user.id,
                        username: user.username,
                        token: token
                    });
                } else {
                    res.status(404).json({ message: "Incorrect username or password." });
                }
            })
            .catch(function (err) {
                res.status(404).json({ message: "Incorrect username or password." });
            });
    });


    app.get("/api/user", function (req, res) {
        User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.get("/api/gamedb/:id", function (req, res) {
        Gamedatabase.findOne({
            npcName: req.params.id
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};
