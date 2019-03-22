const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var GameDatabaseSchema = new Schema({
    npcName: {
        type: String,
        trim: true
    },
    dialogue: {
        type: Array,
        trim: true
    },
    passedTrialDialogue: {
        type: Array,
        trim: true
    },
});

const GameDatabase = mongoose.model("GameDatabase", GameDatabaseSchema);

module.exports = GameDatabase;