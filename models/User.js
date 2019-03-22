const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required",
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required"
    },
    progress: {
        type: Array,
        default: [
            {
                HTML: false
            },
            {
                Javascript: false
            },
            {
                CSS: false
            },
            {
                React: false
            },

        ]
    }
});



const User = mongoose.model("User", UserSchema);

module.exports = User;
