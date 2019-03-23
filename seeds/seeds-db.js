const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thelastdeveloper");

const gameDB = [
    {
        npcName: "HTML",
        dialogue: ["All HTML documents must start with a document type declaration: <!DOCTYPE html>",
            "The visible part of these documents is between the <body> tags",
            "HTML elements are the building blocks of HTML pages and they are represented by tags, denoted by <>",
            "<h1> is the most important or largest heading tag",
            "The character '/' is used to indicate an end tag",
            "CSS wouldn't have a purpose without us"],
        passedTrialDialogue: []
    },
    {
        npcName: "CSS",
        dialogue: ["CSS describes how HTML elements are to be displayed",
            "CSS is used to define styles, including the design, layout and variations in display from different devices",
            "CSS saves immense time by being able to control the layout of multiple web pages in one single external file",
            "The basic rule-set for styling consists of a selector, such as a tag or class, and a declaration block",
            "The 'color' property can be used to change the font color",
            "HTML would be plain and boring without our style"],
        passedTrialDialogue: []
    },
    {
        npcName: "Javascript",
        dialogue: ["Javascript is used to program the behavior of web pages",
            "Important data can be stored by declaring a variable name and setting a value to it",
            "Arrays, which are created with brackets, [], can be used to store multiple values",
            "Javascript can also be used to dynamically update HTML and CSS code",
            "Javascript functions should generally be designed to perform one task",
            "Without us, web pages would just be text with zero functionality"],
        passedTrialDialogue: []
    },
    {
        npcName: "React",
        dialogue: ["React is a Javascript library for building user interfaces",
            "JSX, Javascript XML, is primarily used to write React code ",
            "Expressions can be used in Javascript XML by wrapping them in curly {} braces",
            "React is built with components, which are Javascript functions",
            "React elements are immutable - they cannot be changed unless the page is re-rendered",
            "Thou shall not speak of Jquery ever. Ever. Just don't do it"],
        passedTrialDialogue: []
    },
    {
        npcName: "Gabe the React Rabid",
        dialogue: ["I am the master of the House of React. Are you willing to take on my trial?",
            "React is used as a library primarily for which language?"],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Vu the Javascript Jaeger",
        dialogue: ["I am the master of the House of Javascript. Are you willing to take on my trial?",],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Adam the CSS Connoisseur",
        dialogue: ["I am the master of the House of CSS. Are you willing to take on my trial?",],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Jorge the HTML Hotshot",
        dialogue: ["I am the master of the House of HTML. Are you willing to take on my trial?",],
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
        npcName: "Harrison",
        dialogue: ["What does HTML mean again..? I forgot.. Hmm.. Hyper..Hipper..Hold on. *drinks coffee* HyperText markup language, that's it!"],
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


