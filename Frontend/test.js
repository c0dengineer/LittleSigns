// Questionnaire Data
const sections = [
{
title: "I. Social Connection & Interaction",
questions: [
{
questionTitle: "1. Responding to Name",
description: "Your child is engaged in an activity (playing, watching something, exploring). You call their name from a short distance.",
options: [
"A. They turn and acknowledge you promptly.",
"B. They respond after repetition.",
"C. They respond only if you approach or touch them.",
"D. They appear unaware of their name being called."
]
},
{
questionTitle: "2. Sharing Joy (“Joint Attention”)",
description: "You point to something exciting (a plane, dog, rainbow) and say, “Look!”.",
options: [
"A. They look at it and back at you to share excitement.",
"B. They look at it but don’t look back at you.",
"C. They focus only on the object.",
"D. They don’t follow your pointing or excitement."

]
},
{
questionTitle: "3. Playing With Peers",
description: "At a playground or birthday party:",
options: [
"A. Initiates or joins play with other children.",
"B. Plays alongside others but minimally interacts.",
"C. Prefers solitary play even when invited.",
"D. Seems unaware or uninterested in peers."

]
},
{
questionTitle: "4. Eye Contact During Interaction",
description: "When speaking to your child:",
options: [
"A. Makes comfortable, natural eye contact.",
"B. Brief eye contact but looks away quickly.",
"C. Rarely maintains eye contact.",
"D. Avoids eye contact consistently."

]
},
{
questionTitle: "5. Showing or Bringing toys to Share",
description: "When your child finds something interesting:",
options: [
"A. Brings it to show you and seeks your reaction.",
"B. Shows occasionally but not consistently.",
"C. Plays with it alone without sharing.",
"D. Does not attempt to share discoveries."

]
}
]
},
{
title: "II. Communication & Language",
questions: [
{
questionTitle: "6. Expressing Needs",
description: "When your child wants something out of reach:",
options: [
"A. Clearly requests using words or gestures.",
"B. Attempts communication but struggles.",
"C. Pulls your hand without eye contact.",
"D. Cries or becomes distressed without clear communication."
]
},
{
questionTitle: "7. Back-and-Forth Conversation (Age Appropriate)",
description: 'During kitchen playtime with toy pots and utensils. Does your 2-4 year old pretend to stir food, feed the doll baby, or say "Yummy dinner!" - or just bang pots together without stories?',
options: [
"A. Creates full pretend meals and stories",
"B. Sometimes pretends to cook/feed",
"C. Rarely uses pretend play",
"D. No pretend play at all (just bangs/moves toys)."
]
},
{
questionTitle: "8. Understanding Instructions",
description: "When given a simple 2-step instruction (“Get your shoes and bring them here”):",
options: [
"A. Follows instructions appropriately.",
"B. Needs repetition or prompting.",
"C. Completes only part of instruction.",
"D. Appears confused or does not follow."
]
},
{
questionTitle: "9. Use of Gestures",
description: "Before or alongside words, does your child:",
options: [
"A. Use pointing, waving, nodding appropriately.",
"B. Use gestures occasionally.",
"C. Rarely use gestures to communicate.",
"D. Not use gestures meaningfully."
]
},
{
questionTitle: "10. Repetitive or Scripted Speech",
description: "Does your child repeat lines from shows or conversations?",
options: [
"A. Rarely; mostly spontaneous speech.",
"B. Occasionally repeats but uses own language too.",
"C. Frequently repeats phrases.",
"D. Relies heavily on repeated scripts."
]
}
]
},
{
title: "III. Sensory Experiences",
questions: [
{
questionTitle: "11. Sensitivity to Everyday Sounds",
description: "Imagine you are in common environments a shopping mall, school assembly, vacuum cleaner running, blender, hand dryer in a restroom, or loud laughter nearby.",
options: [
"A. My child tolerates most everyday sounds without distress.",
"B. My child occasionally covers ears or asks for the sound to stop but recovers quickly.",
"C. My child frequently becomes distressed by common sounds and may cry, freeze, or leave the area.",
"D. My child has intense reactions (panic, meltdown, screaming) to certain sounds that others tolerate easily."
]
},
{
questionTitle: "12. Sensitivity to Touch, Clothing & Grooming",
description: "Think about dressing, haircuts, nail trimming, tooth brushing, or certain fabrics.",
options: [
"A. My child tolerates most textures and grooming activities without significant distress.",
"B. My child dislikes certain fabrics (tags, seams) or grooming tasks but manages with reassurance.",
"C. My child strongly resists certain clothes or grooming activities and becomes upset.",
"D. My child refuses many clothing items or grooming routines due to extreme discomfort or distress."
]
},
{
questionTitle: "13. Food Preferences & Texture Sensitivity",
description: "Consider mealtime experiences.",
options: [
"A. My child eats a wide variety of foods across textures and flavors.",
"B. My child prefers certain textures (e.g., crunchy only, soft only) but still maintains a balanced diet.",
"C. My child limits foods due to texture, smell, or appearance, leading to a restricted range.",
"D. My child eats a very narrow selection of foods and may gag, refuse, or become distressed with new textures."
]
},
{
questionTitle: "14. Sensory-Seeking Behaviors",
description: "During quiet playtime at home. Does your child repeatedly flap their hands, back and forth or spin in circles for several minutes rather than playing with toys?",
options: [
"A. Uses typical movements briefly.", 
"B. Occasionally rocks/flaps briefly.",
"C. Frequently repeats movements.",
"D. Does repetitive movements often(5 plus minutes at a time)."
]
},
{
questionTitle: "15. Pain, Temperature & Body Awareness",
description: "Think about minor injuries, hot/cold temperatures, or awareness of bodily signals.",
options: [
"A. My child responds typically to pain, hunger, or temperature changes.",
"B. My child may be slightly more sensitive or slightly less reactive than expected.",
"C. My child often seems unusually sensitive (overreacts to minor discomfort) or unusually insensitive (does not notice injuries easily).",
"D. My child has very high or very low response to pain/temperature, raising safety concerns."
]
}
]
},
{
title: "IV. Emotional Regulation & Adaptability",
questions: [
{
questionTitle: "16. Handling Frustration",
description: "Imagine your child cannot complete a puzzle, loses a game, or something breaks",
options: [
"A. My child may feel upset but can calm down independently or with minimal support.",
"B. My child needs comfort or guidance but recovers within a reasonable time.",
"C. My child frequently becomes overwhelmed and has difficulty calming down without significant support.",
"D. My child has intense meltdowns (crying, screaming, aggression, shutting down) that are prolonged or difficult to resolve."
]
},
{
questionTitle: "17. Transitions Between Activities",
description: "For example: turning off the TV, leaving the playground, or switching from playtime to homework",
options: [
"A. My child transitions smoothly with typical reminders.",
"B. My child needs warnings (“5 more minutes”) but adjusts.",
"C. My child becomes visibly upset or resistant during transitions.",
"D. My child experiences severe distress or meltdown when activities end unexpectedly."
]
},
{
questionTitle: "18. Coping in New or Unfamiliar Environments",
description: "Consider new classrooms, family gatherings, or visiting unfamiliar places.",
options: [
"A. My child explores and adapts comfortably.",
"B. My child shows mild hesitation but warms up with reassurance.",
"C. My child appears anxious, withdrawn, or overwhelmed in new environments.",
"D. My child shows extreme distress, shutdown, or refusal in unfamiliar settings."
]
},
{
questionTitle: "19. Recognising & Responding to Others’ Emotions",
description: "If a sibling is crying or a parent appears upset:",
options: [
"A. My child notices and shows concern or asks what happened.",
"B. My child sometimes notices but may not know how to respond.",
"C. My child rarely recognises emotional cues unless explicitly told.",
"D. My child appears unaware of others’ emotional states."
]
},
{
questionTitle: "20. Self-Soothing & Recovery After Distress",
description: "After becoming upset or overwhelmed:",
options: [
"A. My child seeks comfort appropriately (hugs, words, quiet space) and recovers.",
"B. My child needs structured reassurance but eventually settles.",
"C. My child relies on repetitive behaviors (rocking, pacing, withdrawal) to cope.",
"D. My child struggles significantly to self-soothe and may escalate before calming down."
]
}
]
}
];


let currentSection = 0;
let currentQuestion = 0;

// store answers as object { "0-0": 2 }
let answers = {};

function loadQuestion() {

    let section = sections[currentSection];
    let question = section.questions[currentQuestion];

    document.getElementById("sectionLabel").innerText =
        `Section ${currentSection + 1} of 4`;

    document.getElementById("sectionTitle").innerText =
        section.title;

    document.getElementById("questionLabel").innerText =
        `Question ${currentQuestion + 1} of 5`;

    document.getElementById("bigSectionTitle").innerText =
    section.title;

    document.getElementById("questionTitle").innerText =
    question.questionTitle;

    document.getElementById("questionDescription").innerText =
    question.description;

    let optionsHTML = "";
    let savedAnswer = answers[`${currentSection}-${currentQuestion}`];

    question.options.forEach((opt, index) => {

        let selectedClass = (savedAnswer === index) ? "option-selected" : "";

        optionsHTML += `
            <div class="option-box ${selectedClass}" 
                onclick="selectOption(${index})">
                ${opt}
            </div>`;
    });

    document.getElementById("optionsContainer").innerHTML = optionsHTML;

    updateButtons();
    updateProgress();
}

function selectOption(index) {

    answers[`${currentSection}-${currentQuestion}`] = index;

    loadQuestion(); // reload to show selected highlight
}

function nextQuestion() {

    if (answers[`${currentSection}-${currentQuestion}`] === undefined) {
        alert("Please select an option before continuing.");
        return;
    }

    if (currentQuestion < 4) {
        currentQuestion++;
    } else {
        if (currentSection < 3) {
            currentSection++;
            currentQuestion = 0;
        }
    }

    loadQuestion();
}

function prevQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
    } else if (currentSection > 0) {
        currentSection--;
        currentQuestion = 4;
    }

    loadQuestion();
}

function updateButtons() {

    let nextBtn = document.getElementById("nextBtn");

    if (currentSection === 3 && currentQuestion === 4) {
        nextBtn.innerText = "Submit";
        nextBtn.onclick = submitTest;
    } else {
        nextBtn.innerText = "Next →";
        nextBtn.onclick = nextQuestion;
    }
}

function submitTest() {

    if (answers[`${currentSection}-${currentQuestion}`] === undefined) {
        alert("Please select an option before submitting.");
        return;
    }

    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("testCompleted", "true");

    alert("Test submitted successfully!");
    window.location.href = "report.html";
}

function updateProgress() {

    let total = 20;
    let current = currentSection * 5 + currentQuestion + 1;
    let percent = (current / total) * 100;

    document.getElementById("progressBar").style.width = percent + "%";
}

loadQuestion();