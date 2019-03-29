const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
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
                class: "HTML",
                passed: false
            },
            {
                class: "Javascript",
                passed: false
            },
            {
                class: "CSS",
                passed: false
            },
            {
                class: "React",
                passed: false
            },

        ]
    },
    trialsPassed: {
        type: Number,
        default: 0
    },
    introPassed: {
        type: Boolean,
        default: false
    },
    abilities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Skill"
        }
    ]
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if (!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT))

    return next();

});



const User = mongoose.model("User", UserSchema);

module.exports = User;
