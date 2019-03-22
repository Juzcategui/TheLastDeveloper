const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thelastdeveloper");

const gameDB = [
    {
        npcName: "Gabe the React Rabid",
        dialogue: ["Hi, I am the master of the House of React. Are you willing to take on my trial?", "React is used as a library primarily for which language?"],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Vu the Javascript Jaeger",
        dialogue: ["Hi, I am the master of the House of Javascript. Are you willing to take on my trial?",],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Adam the CSS Connoisseur",
        dialogue: ["Hi, I am the master of the House of CSS. Are you willing to take on my trial?",],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Jorge the HTML Hotshot",
        dialogue: ["Hi, I am the master of the House of HTML. Are you willing to take on my trial?",],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."],
    },
    {
        npcName: "Peter",
        dialogue: ["Aaron, what are you doing?! That's not the right declaration to create a constant variable. Why are you using var?? Const is used when you don't want the variable to be redefined!"],
        passedTrialDialogue: []
    },
    {
        npcName: "Aaron",
        dialogue: ["I know what I'm doing. Don't make me bully you. By the way, did you know that the operator '===' denotes strict equality? "],
        passedTrialDialogue: []
    },
    {
        npcName: "Erwins",
        dialogue: ["You know what is awful? Jquery is awful. React is so much better. Hmph. It uses a virtual dom, so everything renders faster...a lot faster. It's great!"],
        passedTrialDialogue: []
    },
    {
        npcName: "Paige",
        dialogue: ["I'm so tired. My neighbor's devil dogs woke me up so early today! *Yawn*. The only thing I remember from studying last night was that everything in a React App is a component."],
        passedTrialDialogue: []
    },
    {
        npcName: "Barry",
        dialogue: ["No more tall boys for me. I am exhausted. Cascading down the town's hill was tiring. Do you know what else cascades? CSS!"],
        passedTrialDialogue: []
    },
    {
        npcName: "Lin",
        dialogue: ["I was looking for my grandma's missing flip flop yesterday but instead I found a treasure chest! ...But it was empty.. *sad face* I brought it home to style it. I added a border, color, and adjusted the width."],
        passedTrialDialogue: []
    },
    {
        npcName: "John",
        dialogue: ["What does HTML mean again..? I forgot.. Hmm.. Hyper..Hipper..*Mumbling curse words* HyperText markup language, that's it!"],
        passedTrialDialogue: []
    },
    {
        npcName: "Mark",
        dialogue: ["I can complete assigned exercises just fine, but when I'm cut loose to create things on my own, I have no idea what to do! I do know some HTML fundamentals though. To display basic text on an HTML page, you can use a paragraph tag. The paragraph tag is denoted by '<p>'!"],
        passedTrialDialogue: []
    }

]

db.GameDatabase.remove({})
    .then(() => db.GameDatabase.collection.insertMany(gameDB))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
    })
    .catch(err => {
        console.error(err);
    });


