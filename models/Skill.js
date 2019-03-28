const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var SkillSchema = new Schema({
    body: String
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;