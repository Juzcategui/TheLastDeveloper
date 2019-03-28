const mongoose = require("mongoose");
const db = require('../models');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thelastdeveloper", { useNewUrlParser: true });

const gamedb = [
    // Scrolls in the houses
    {
        npcName: "HTML",
        dialogue: ["All HTML documents must start with a document type declaration: <!DOCTYPE html>",
            "The visible part of these documents is between the <body> tags",
            "HTML elements are the building blocks of HTML pages and they are represented by tags, denoted by <>",
            "<h1> is the most important or largest heading tag",
            "The character '/' is used to indicate an end tag",
            "CSS wouldn't have a purpose without us"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "CSS",
        dialogue: ["CSS describes how HTML elements are to be displayed",
            "CSS is used to define styles, including the design, layout and variations in display from different devices",
            "CSS saves immense time by being able to control the layout and style of multiple web pages in one single external file",
            "The basic rule-set for styling consists of a selector, such as a tag or class, and a declaration block",
            "The 'color' property can be used to change the font color",
            "HTML would be plain and boring without our style"],
        position: [0, 0],
        beatTrial: [],
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
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "React",
        dialogue: ["React is a Javascript library for building user interfaces",
            "JSX, Javascript XML, is primarily used to write React code ",
            "Expressions can be used in Javascript XML by wrapping them in curly {} braces",
            "React is built with components, which are Javascript functions",
            "React elements are immutable - they cannot be changed unless the page is re-rendered",
            "Thou shall not speak of jQuery ever. Ever. Just don't do it"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    // Master NPC in each towm
    {
        npcName: "Vu the Javascript Jaeger",
        dialogue: ["I am the Javascript master. Are you willing to take on my trial?",
            "What declaration is used to create a constant variable?",
            "What operation is used when you want to compare type and value?"],
        position: [0, 0],
        beatTrial: ["Impressive, young buck. I am amazed at how far you've gotten. Here is your new ability: (placeholder)! "],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Gabe the React Rabid",
        dialogue: ["I am the React master. Are you willing to take on my trial?",
            "React is used as a library primarily for which language?",
            "What is the building block for a React application?"],
        position: [0, 0],
        beatTrial: ["Congratulations, you have passed my trial. Here is your new ability: (placeholder)! I will take it back if you ever use jQuery though."],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Adam the CSS Connoisseur",
        dialogue: ["I am the CSS master. Are you willing to take on my trial?",
            "What does the C in CSS stand for?",
            "What property is declared to change the font color?"],
        position: [0, 0],
        beatTrial: ["YOU DID IT! Here is your new ability: (placeholder)! Ugh. You are so fabulous. I just can't. Get out of here before I lose it. "],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Jorge the HTML Hotshot",
        dialogue: ["I am the HTML master. Are you willing to take on my trial?",
            "What does HTML stand for?",
            "What is the correct syntax for a paragraph tag?"],
        position: [0, 0],
        beatTrial: ["Okay okay, not bad. You've passed my trial. Here is your new ability: (placeholder)! Maybe one day, you'll be a hotshot like me. "],
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."],
    },

    //Willbucks
    {
        npcName: "Will",
        dialogue: ["Hey, I'm Will! Welcome to Willbucks! You look tired - you must be coding too much! Want some coffee?"],
        position: [0, 0],
        beatTrial: ["Thanks! This will help my competitive barista career take off!"],
        passedTrialDialogue: ["Okay, come again soon!"]
    },
    {
        npcName: "Peter",
        dialogue: ["One day, I'll take Will's job..."],
        position: [0, 0],
        beatTrial: [""],
        passedTrialDialogue: []
    },


    // Javascript town NPC
    {
        npcName: "Pedro",
        dialogue: ["Aaron, what are you doing?! That's not the right declaration to create a constant variable. Why are you using var?? Const is used when you don't want the variable to be redefined!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Aaron",
        dialogue: ["I know what I'm doing. Don't make me bully you. By the way, did you know that the operator '===' denotes strict equality? "],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Garrett",
        dialogue: ["You're going to challenge Mongod? You are a brave one. You should pass all four trials before you take him on!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Mia",
        dialogue: ["You look like you could use a pick-me-up. Head over to Willbucks! They have great coffee."],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Alexander",
        dialogue: ["Wash your hair lately?"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },

    // React town NPC
    {
        npcName: "Erwins",
        dialogue: ["You know what is awful? jQuery is awful. React is so much better. Hmph. It uses a virtual dom and gets rid of 'spaghetti code.' Javascript is the main language used with React. It's great!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Paige",
        dialogue: ["I'm so tired. My neighbor's devil dogs woke me up so early today! *Yawn*. The only thing I remember from studying last night was that almost everything in a React application is a component."],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Craigster",
        dialogue: ["If there was one instrument I could know how to play, it would be the bagpipes!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Camila",
        dialogue: ["@&#(! I hate bugs! Just when you think you're in the clear, one comes out of nowhere. They ruin everything!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Nathan",
        dialogue: ["Have you tried turning it off and on again? "],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Son the Homeless",
        dialogue: ["Gabe disowned me for using jQuery... I should have read his documentation... "],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },

    // CSS town NPC
    {
        npcName: "Barry",
        dialogue: ["No more tall boys for me. I am exhausted. Cascading down the town's hill was tiring. Do you know what else cascades? CSS or Cascading Style Sheets!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Lin",
        dialogue: ["I was looking for my grandma's missing flip flop yesterday but instead I found a treasure chest! ...Unfortunately, it was empty.. *sad face* I brought it home to style it. I added a border, color, and adjusted the width."],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Martin",
        dialogue: ["I found an awesome flip flop today! I wonder who it belongs to?"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Tony",
        dialogue: ["I keep hearing about this My Sequel server... but I feel left out because I haven't seen the first one!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Jenny",
        dialogue: ["I'm a fantastic pseudocoder. Jealous?"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },


    // HTML town NPC
    {
        npcName: "Harrison",
        dialogue: ["What does HTML mean again..? I forgot.. Hmm.. Hopper..Hipper..Hold on. *drinks coffee* Hyper Text Markup Language, that's it!"],
        position: "160,120",
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Mark",
        dialogue: ["I can complete assigned exercises just fine, but when I'm cut loose to create things on my own, I have no idea what to do! I do know some HTML fundamentals though. To display basic text on an HTML page, you can use a paragraph tag. The paragraph tag is denoted by '<p>'!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },
    {
        npcName: "Leonardo",
        dialogue: ["Every time you pass a trial, you learn a new ability. Train hard!"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Michaelangelo",
        dialogue: ["I could go for a slice of pizza. Or 12."],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    }, {
        npcName: "Raphael",
        dialogue: ["*Silent brooding*"],
        position: [0, 0],
        beatTrial: [],
        passedTrialDialogue: []
    },

]

db.Gamedatabase.deleteMany({})
    .then(() => db.Gamedatabase.collection.insertMany(gamedb))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });


