const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var GamedatabaseSchema = new Schema({
    npcName: {
        type: String,
        trim: true
    },
    dialogue: {
        type: Array,
        trim: true
    },
    position: {
        type: Array,
        trim: true
    },
    beatTrial: {
        type: Array,
        trim: true
    },
    map: {
        type: String,
        trim: true
    },
    passedTrialDialogue: {
        type: Array,
        trim: true
    }
});

const Gamedatabase = mongoose.model("Gamedatabase", GamedatabaseSchema);

module.exports = Gamedatabase;