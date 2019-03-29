const Gamedatabase = require("../models/Gamedatabase");
const User = require("../models/User");
const Skill = require("../models/Skill");
const jwt = require("jsonwebtoken");
const config = require("../config.json");


module.exports = function (app) {
    app.get("/api/user/:id", function (req, res) {
        User.findOne({ _id: req.params.id })
            .populate('abilities')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/intro', function (req, res) {
        const userId = req.body.userId;
        User.findOneAndUpdate({ _id: userId },
            {
                $set: { "introPassed": true }
            })
            .then(function (data) {
                res.json({ success: true, data: data });
            }).catch(function (err) {
                res.json({ success: false, error: err });
            });
    });

    app.put('/api/user', function (req, res) {
        const userId = req.body.userId;
        const classHouse = req.body.classHouse;
        const trialsPassed = req.body.trialsPassed;
        User.findOneAndUpdate({ _id: userId },
            { $set: { "trialsPassed": trialsPassed + 1, "progress.$[elem].passed": true } },
            {
                multi: true,
                arrayFilters: [{ "elem.class": classHouse }]
            })
            .then(function (data) {
                res.json({ success: true, data: data });
            }).catch(function (err) {
                res.json({ success: false, error: err });
            });
    });

    app.post('/api/signup', function (req, res) {
        const userData = {
            username: req.body.username,
            password: req.body.password
        };

        User.create(userData).then(function (data) {
            res.json(data);
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

    app.get("/api/npc/:id", function (req, res) {
        Gamedatabase.findOne({
            position: req.params.id
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/skill', function (req, res) {
        const userId = req.body.userId;
        const newEntry = {
            body: req.body.body
        }

        Skill.create(newEntry)
            .then(function (skillData) {
                return User.findOneAndUpdate({ _id: userId }, { $push: { abilities: skillData._id } }, { new: true });
            })
            .then(function (skillData) {
                res.json(skillData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });



};
