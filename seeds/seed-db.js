const mongoose = require("mongoose");
const db = require('../models');
mongoose.Promise = global.Promise;

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
        position: ",",
        beatTrial: [],
        map: "",
        travelDialogue: '',
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
        position: ",",
        beatTrial: [],
        map: "",
        travelDialogue: '',
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
        position: ",",
        beatTrial: [],
        map: "",
        travelDialogue: '',
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
        position: ",",
        beatTrial: [],
        map: "",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    // Master NPC in each towm
    {
        npcName: "Vu the Javascript Jaeger",
        dialogue: ["Welcome. I am Vu, the Javascript master. Functionality is my forte. Are you willing to take on my trial?",
            "What declaration is used to create a constant variable?",
            "What operation is used when you want to compare type and value?"],
        position: "640,400",
        beatTrial: ["Impressive, young buck. I am amazed at how far you've gotten. Here is your new ability: Five Minute Stretch Break! It's incredible what 5 minutes can do for the mind! "],
        map: "JavascriptHouse",
        travelDialogue: "I am the master of this town. Are you ready to showcase your talent?",
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Gabe the React Rabid",
        dialogue: ["Hello there! I am Gabe, the React master. I am adept at building efficient user interfaces. Are you willing to take on my trial?",
            "React is used as a library primarily for which language?",
            "What is the building block for a React application?"],
        position: "440,120",
        beatTrial: ["Congratulations, you have passed my trial. Here is your new ability: Short Circuit! It works about.... 50% of the time. I will take it back if you ever use jQuery though."],
        map: "ReactHouse",
        travelDialogue: "I am the master of this town. Are you ready to showcase your talent?",
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Adam the CSS Connoisseur",
        dialogue: ["How's it going? I am Adam, the CSS master. Styling is my specialty. Are you willing to take on my trial?",
            "What does the C in CSS stand for?",
            "What property is declared to change the font color?"],
        position: "600,360",
        beatTrial: ["YOU DID IT! Here is your new ability: Pseudocode! I use it all the time when I'm planning out my designs. Ugh. You are so fabulous. I just can't. Get out of here before I lose it. "],
        map: "CSSHouse",
        travelDialogue: "I am the master of this town. Are you ready to showcase your talent?",
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."]
    },
    {
        npcName: "Jorge the HTML Hotshot",
        dialogue: ["Nice to meet you. I am Jorge, the HTML master. Creating content is my gift. Are you willing to take on my trial?",
            "What does HTML stand for?",
            "What is the correct syntax for a paragraph tag?"],
        position: "520,480",
        beatTrial: ["Okay okay, not bad. You've passed my trial. Here is your new ability: Fist to Five! You can always open your fist and reach out to others for help. Maybe one day, you'll be a hotshot like me. "],
        map: "HTMLHouse",
        travelDialogue: "I am the master of this town. Are you ready to showcase your talent?",
        passedTrialDialogue: ["I'm impressed! I see you've been studying; there's nothing more I can teach you. If you'd like to practice more, come visit me again."],
    },

    //Willbucks / Cody
    {
        npcName: "Will",
        dialogue: ["Hey, I'm Will! Welcome to Willbucks! You look tired - you must be coding too much! Want some coffee?"],
        position: ",",
        beatTrial: ["Thanks! This will help my competitive barista career take off!"],
        map: "",
        travelDialogue: '',
        passedTrialDialogue: ["Okay, come again soon!"]
    },
    {
        npcName: "Peter TA",
        dialogue: ["One day, I'll take Will's job..."],
        position: ",",
        beatTrial: [""],
        map: "",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Cody",
        dialogue: ["Alan, I've finally found you. The knowledge of the people has been fractured and they have forgotten what it means to work together.",
            "Everything has changed. I feel it in the water, the Earth. I smell it in the syntax.",
            "We can't concern ourselves with what was. We must act on what is. Our King is nowhere to be found, but there is still hope. You.",
            "You carry the royal blood Alan, and have the ability to resist MonGod's dark influence. It is up to you to travel to each of the realms and obtain the knowledge of their masters.",
            "The journey will be long and fraught with peril - but I believe in you. With determination and perseverance, you will be able to master the four disciplines and seal MonGod away once and for all."],
        position: ",",
        beatTrial: ["You SHALL NOT - Oh. Nevermind, you're not a bad guy. Come in, Alan.",
            "How is your training going? MonGod is ruthless and merciless. You need to be prepared.",
            "Remember to read the documentation. I believe in you.",
            "This journey will be difficult but know that you cannot know victory without first experiencing defeat."],
        map: "",
        travelDialogue: '',
        passedTrialDialogue: []
    },

    // Javascript town NPC
    {
        npcName: "Peter",
        dialogue: ["Aaron, what are you doing?! That's not the right declaration to create a constant variable. Why are you using var?? Const is used when you don't want the variable to be redefined!"],
        position: "520,80",
        beatTrial: [],
        map: "Javascript",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Aaron",
        dialogue: ["I know what I'm doing. Don't make me bully you. By the way, did you know that the operator '===' denotes strict equality? "],
        position: "440,80",
        beatTrial: [],
        map: "Javascript",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Garrett",
        dialogue: ["You're going to challenge Mongod? You are a brave one. You should pass all four trials before you take him on!"],
        position: "160,600",
        beatTrial: [],
        map: "Javascript",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Olivia",
        dialogue: ["You look like you could use a pick-me-up. Head over to Willbucks! They have great coffee."],
        position: "760,320",
        beatTrial: [],
        map: "Javascript",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Alexander",
        dialogue: ["@&#(! I hate bugs! Just when you think you're in the clear, one comes out of nowhere. They ruin everything!"],
        position: "920,120",
        beatTrial: [],
        map: "Javascript",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Javascript Town Guard",
        dialogue: "",
        position: "520,600",
        beatTrial: [],
        map: "WorldMap",
        travelDialogue: ["Would you like to leave the town and explore?"],
        passedTrialDialogue: []
    },


    // React town NPC
    {
        npcName: "Erwins",
        dialogue: ["You know what is awful? jQuery is awful. React is so much better. Hmph. It uses a virtual dom and gets rid of 'spaghetti code.' Javascript is the main language used with React. It's great!"],
        position: "560,520",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Paige",
        dialogue: ["I'm so tired. My neighbor's devil dogs woke me up so early today! *Yawn*. The only thing I remember from studying last night was that almost everything in a React application is a component."],
        position: "960,120",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Craigster",
        dialogue: ["If there was one instrument I could know how to play, it would be the bagpipes!"],
        position: "1160,400",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Camila",
        dialogue: ["♪ Havana, ooh na na ♪ Opps, sorry. I was just singing a song I wrote. Think anyone will like it?"],
        position: "920,480",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Nathan",
        dialogue: ["Have you tried turning it off and on again? "],
        position: "200,160",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Son",
        dialogue: ["Gabe disowned me for using jQuery... I should have read his documentation... "],
        position: "640,160",
        beatTrial: [],
        map: "React",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "React Town Guard",
        dialogue: '',
        position: "360,600",
        beatTrial: [],
        map: "WorldMap",
        travelDialogue: ["Would you like to leave the town and explore?"],
        passedTrialDialogue: []
    },


    // CSS town NPC
    {
        npcName: "Barry",
        dialogue: ["No more tall boys for me. I am exhausted. Cascading down the town's hill was tiring. Do you know what else cascades? CSS or Cascading Style Sheets!"],
        position: "920,280",
        beatTrial: [],
        map: "CSS",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Lin",
        dialogue: ["I was looking for my grandma's missing flip flop yesterday but instead I found a treasure chest! ...Unfortunately, it was empty.. *sad face* I brought it home to style it. I added a border, color, and adjusted the width."],
        position: "480,640",
        beatTrial: [],
        map: "CSS",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Manny",
        dialogue: ["Do any good reading lately? I found a good book just sitting at Wilbucks. I think I found it for a reason."],
        position: "320,120",
        beatTrial: [],
        map: "CSS",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Tim",
        dialogue: ["I keep hearing about this My Sequel server... but I feel left out because I haven't seen the first one!"],
        position: "1040,40",
        beatTrial: [],
        map: "CSS",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Jenny",
        dialogue: ["I'm a fantastic pseudocoder. Jealous? By the way, I found an awesome flip flop today! I wonder who it belongs to?"],
        position: "320,280",
        beatTrial: [],
        map: "CSS",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "CSS Town Guard",
        dialogue: '',
        position: "920,80",
        beatTrial: [],
        map: "WorldMap",
        travelDialogue: ["Would you like to leave the town and explore? By the way, did you see the cave?"],
        passedTrialDialogue: []
    }, {
        npcName: "Dilapidated Sign",
        dialogue: ["If something works, then someone first had to figure out HOW it will work. Always remember to check the documentation of any framework you use."],
        position: "400,280",
        beatTrial: [],
        map: "CSS",
        passedTrialDialogue: []
    }, {
        npcName: "Rickety Sign",
        dialogue: ["Check out W3 Schools and MDN whenever you're wondering how to style an element or use a method."],
        position: "800,400",
        beatTrial: [],
        map: "CSS",
        passedTrialDialogue: []
    }, {
        npcName: "Graffiti Covered Sign",
        dialogue: ["Whatever was written here seems to have been covered with a burrito in permanent marker. Guess someone was hungry..."],
        position: "120,480",
        beatTrial: [],
        map: "CSS",
        passedTrialDialogue: []
    },



    // HTML town NPC
    {
        npcName: "Harrison",
        dialogue: ["What does HTML mean again..? I forgot.. Hmm.. Hopper..Hipper..Hold on. *drinks coffee* Hyper Text Markup Language, that's it!"],
        position: "560,360",
        beatTrial: [],
        map: "HTML",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Mark",
        dialogue: ["I can complete assigned exercises just fine, but when I'm cut loose to create things on my own, I have no idea what to do! I do know some HTML fundamentals though. To display basic text on an HTML page, you can use a paragraph tag. The paragraph tag is denoted by '<p>'!"],
        position: "800,120",
        beatTrial: [],
        map: "HTML",
        travelDialogue: '',
        passedTrialDialogue: []
    },
    {
        npcName: "Leonardo",
        dialogue: ["Every time you pass a trial, you learn a new ability. Train hard!"],
        position: "200,360",
        beatTrial: [],
        map: "HTML",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Michelangelo",
        dialogue: ["I could go for a slice of pizza. Or 12."],
        position: "240,120",
        beatTrial: [],
        map: "HTML",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "Raphael",
        dialogue: ["*Silent brooding*"],
        position: "1040,440",
        beatTrial: [],
        map: "HTML",
        travelDialogue: '',
        passedTrialDialogue: []
    }, {
        npcName: "HTML Town Guard",
        dialogue: "",
        position: "1200,160",
        beatTrial: [],
        map: "WorldMap",
        travelDialogue: ["Would you like to leave the town and explore?"],
        passedTrialDialogue: []
    },

]

db.Gamedatabase.deleteMany({})
    .then(() => db.Gamedatabase.collection.insertMany(gamedb))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


