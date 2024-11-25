let rollingSound = new Audio('rpg-dice-rolling-95182.mp3');
let winSound = new Audio('winharpsichord-39642.mp3');
// Red player's position
let p1sum = 0;
// Question data (example questions, you can add more)
const questions = [
    {
        question: "Which articles of the Indian Constitution cover the Right to Equality?",
        options: ["14-18", "12-16", "19-22", "23-25"],
        correct: [0]
    },
    {
        question: "What does Article 14 guarantee?",
        options: ["Right to Equality before the law", "Right to Education", "Right to Freedom of Religion", "Right to Employment"],
        correct: [0]
    },
    {
        question: "What is prohibited under Article 15 of the Constitution?",
        options: ["Discrimination based on religion, race, caste, sex, or place of birth", "Untouchability", "Child labor", "Freedom of speech restrictions"],
        correct: [0]
    },
    {
        question: "Which article abolishes untouchability in India?",
        options: ["Article 14", "Article 15", "Article 16", "Article 17"],
        correct: [3]
    },
    {
        question: "What is the purpose of Article 16?",
        options: ["Abolition of titles", "Equal opportunities in public employment", "Protection of minorities", "Abolition of untouchability"],
        correct: [1]
    },
    {
        question: "Which fundamental right does the abolition of titles (Article 18) uphold?",
        options: ["Right to Equality", "Right to Freedom", "Right to Education", "Right to Constitutional Remedies"],
        correct: [0]
    },
    {
        question: "Under Article 15, which of these is NOT allowed?",
        options: ["Discrimination in access to public spaces", "Protective discrimination policies", "Reservation in public employment", "Discrimination in matters of family law"],
        correct: [0]
    },
    {
        question: "The phrase 'Equality before the law' is borrowed from which country?",
        options: ["USA", "UK", "Canada", "France"],
        correct: [1]
    },
    {
        question: "Article 16 provides equality in public employment to which categories?",
        options: ["Only citizens", "All residents", "Both citizens and non-citizens", "Refugees"],
        correct: [0]
    },
    {
        question: "What does Article 14 ensure regarding laws?",
        options: ["All laws must be equal for everyone", "Laws can discriminate in special circumstances", "No person is above the law", "Both b and c"],
        correct: [3]
    },
    {
        question: "Which form of equality is promoted by Article 15(3)?",
        options: ["Equality of gender", "Protective discrimination for women and children", "Reservation for Scheduled Tribes", "Equality in voting rights"],
        correct: [1]
    },
    {
        question: "Which article states that untouchability is an offense punishable by law?",
        options: ["Article 16", "Article 17", "Article 14", "Article 18"],
        correct: [1]
    },
    {
        question: "Titles such as 'Sir' or 'Lord' are prohibited under which article?",
        options: ["Article 14", "Article 15", "Article 17", "Article 18"],
        correct: [3]
    },
    {
        question: "Which group can be provided reservation under Article 15(4)?",
        options: ["Minorities", "Socially and educationally backward classes", "Economically weaker sections", "Refugees"],
        correct: [1]
    },
    {
        question: "Equality before the law means:",
        options: ["The government can favor some groups", "Everyone is subject to the ordinary law of the land", "Certain groups are exempt from the law", "None of the above"],
        correct: [1]
    },
    {
        question: "A law that discriminates in favor of women is:",
        options: ["Unconstitutional under Article 14", "Constitutional under Article 15(3)", "Unconstitutional under Article 16", "Constitutional under Article 18"],
        correct: [1]
    },
    {
        question: "Can a university reserve seats for Scheduled Castes under Article 15?",
        options: ["Yes, under Article 15(4)", "No, it violates Article 14", "Only for Scheduled Tribes", "None of the above"],
        correct: [0]
    },
    {
        question: "Which principle does the Right to Equality NOT cover?",
        options: ["Equality before law", "Equal protection of laws", "Freedom of religion", "Prohibition of discrimination"],
        correct: [2]
    },
    {
        question: "The Supreme Court upheld the reservation policy under which article?",
        options: ["Article 14", "Article 15(4)", "Article 16(4)", "Both b and c"],
        correct: [3]
    },
    {
        question: "A foreigner cannot claim rights under:",
        options: ["Article 14", "Article 15", "Both a and b", "None of the above"],
        correct: [1]
    },
    {
        question: "Which articles of the Indian Constitution deal with the Right to Freedom?",
        options: ["14-18", "19-22", "23-26", "12-16"],
        correct: [1]
    },
    {
        question: "Which of the following is NOT a freedom under Article 19?",
        options: ["Freedom of speech and expression", "Freedom to move freely throughout India", "Freedom to equality before the law", "Freedom to assemble peacefully"],
        correct: [2]
    },
    {
        question: "What does Article 20 protect individuals from?",
        options: ["Discrimination", "Conviction for offenses not defined by law", "Forced labor", "Religious discrimination"],
        correct: [1]
    },
    {
        question: "Article 21 ensures the Right to:",
        options: ["Freedom of movement", "Protection of life and personal liberty", "Free legal aid", "Equal pay for equal work"],
        correct: [1]
    },
    {
        question: "Which article prohibits arbitrary arrest and detention?",
        options: ["Article 19", "Article 21", "Article 22", "Article 18"],
        correct: [2]
    },
    {
        question: "Article 19 allows reasonable restrictions on freedoms for reasons like:",
        options: ["National security, public order, and morality", "Religion, caste, and community", "Education, equality, and health", "Speech, movement, and assembly"],
        correct: [0]
    },
    {
        question: "Which of these is a condition for preventive detention under Article 22?",
        options: ["A person can be detained for up to 6 months without trial", "Grounds for detention must be provided within 3 months", "Detention beyond 3 months requires approval from an Advisory Board", "All of the above"],
        correct: [3]
    },
    {
        question: "Which of the following is protected under Article 21?",
        options: ["Right to die", "Right to privacy", "Right to strike", "Right to religion"],
        correct: [1]
    },
    {
        question: "Under Article 19, citizens are granted freedom to form associations except for:",
        options: ["Political parties", "Criminal organizations", "Educational institutions", "Social clubs"],
        correct: [1]
    },
    {
        question: "The principle of ‘No person shall be convicted twice for the same offense’ is known as:",
        options: ["Double jeopardy", "Habeas Corpus", "Ex post facto law", "Judicial review"],
        correct: [0]
    },
    {
        question: "Preventive detention laws must adhere to which safeguards under Article 22?",
        options: ["A detained person must be informed of reasons within 3 months", "Advisory Board must include a judge or retired judge", "Detention orders cannot be reviewed", "Both a and b"],
        correct: [3]
    },
    {
        question: "What is NOT considered under the Right to Life under Article 21?",
        options: ["Right to a clean environment", "Right to marry", "Right to employment", "Right to education"],
        correct: [2]
    },
    {
        question: "Which Article allows Parliament to restrict freedom during an emergency?",
        options: ["Article 19", "Article 20", "Article 21", "Article 22"],
        correct: [0]
    },
    {
        question: "What does the term ‘Ex post facto law’ mean in Article 20(1)?",
        options: ["A person can be punished for a new law retrospectively", "No law can punish an act that was not a crime when committed", "Laws must apply equally to all citizens", "Laws are enforced only after the Supreme Court’s approval"],
        correct: [1]
    },
    {
        question: "Under Article 22, a person arrested must be presented before a magistrate within:",
        options: ["24 hours", "48 hours", "72 hours", "One week"],
        correct: [0]
    },
    {
        question: "Which case established the Right to Privacy as part of Article 21?",
        options: ["Maneka Gandhi v. Union of India", "Kesavananda Bharati v. State of Kerala", "Puttaswamy v. Union of India", "A.K. Gopalan v. State of Madras"],
        correct: [2]
    },
    {
        question: "Article 23 prohibits what form of exploitation?",
        options: ["Child labor", "Forced labor", "Caste-based discrimination", "Bonded labor"],
        correct: [1]
    },
    {
        question: "What does Article 24 prohibit?",
        options: ["Child labor in factories", "Bonded labor", "Untouchability", "Forced labor"],
        correct: [0]
    },
    {
        question: "The protection against arrest and detention is provided under which article?",
        options: ["Article 19", "Article 20", "Article 21", "Article 22"],
        correct: [3]
    },

    {
        question: "What does the term 'freedom of conscience' in Article 25 imply?",
        options: ["Freedom to propagate religion", "Freedom to change religion", "Freedom to hold religious beliefs of one’s choice", "Freedom to convert others"],
        correct: [2]
    },
    {
        question: "Article 26 allows religious denominations to:",
        options: ["Own property and administer it", "Appoint government officials", "Challenge government policies", "All of the above"],
        correct:[3]
    }

];
// Global flag to track if a question is active
let questionActive = false;
// Function to show a random question with a timer
function showQuestion(diceValue, callback) {
    questionActive = true;
    const questionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[questionIndex];
    const numOptions = diceValue;
    const options = question.options.slice(0, numOptions);
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.right = '2%'; // Position the modal to the right side
    modal.style.left = '72%';
    modal.style.transform = 'translateY(-50%)'; // Vertically center the modal
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '1000';
    const questionText = document.createElement('p');
    questionText.innerText = question.question;
    modal.appendChild(questionText);
    const timerText = document.createElement('p');
    timerText.innerText = "Time Left: 20s";
    modal.appendChild(timerText);
    let timer = 20;
    const timerInterval = setInterval(() => {
        timer--;
        timerText.innerText = `Time Left: ${timer}s`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            document.body.removeChild(modal);
            questionActive = false;
            callback(false);
            alert("Time's up! You moved back one step.");
        }
    }, 1000);
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.style.margin = '5px';
        button.onclick = () => {
            clearInterval(timerInterval);
            document.body.removeChild(modal);
            questionActive = false;
            const correctAnswers = question.correct;
            const isCorrect = correctAnswers.includes(index);
            callback(isCorrect);
        };
        modal.appendChild(button);
    });
    document.body.appendChild(modal);
}
// Function to handle ladders and show question
function handleLadder(player, destination, diceValue, callback) {
    showQuestion(diceValue, (correct) => {
        if (correct) {
            p1sum = destination;
            play(player, 'p1sum', 0, 0); // Refresh position
            alert("Correct answer! You climbed the ladder!");
        } else {
            alert("Wrong answer! You stay at the current position of the ladder.");
            play(player, 'p1sum', 0, 0); // Refresh position
        }
        callback();
    });
}
function handleSnake(player, destination, diceValue, callback) {
    showQuestion(diceValue, (correct) => {
        if (correct) {
            p1sum = destination;
            play(player, 'p1sum', 0, 0); // Refresh position
            alert("Correct answer! You escaped the snake!");
        } else {
            alert("Wrong answer! You stay at the current position of the snake.");
            play(player, 'p1sum', 0, 0); // Refresh position
        }
        callback();
    });
}
// Function to update player position and handle snakes and ladders
function play(player, psum, correction, num) {
    p1sum += num;
    if (p1sum > 100) {
        p1sum -= num;
    }
    // Snakes and ladders logic
    switch (p1sum) {
        case 1:
            handleLadder(player, 38, num, () => { });
            return;
        case 4:
            handleLadder(player, 14, num, () => { });
            return;
        case 8:
            handleLadder(player, 30, num, () => { });
            return;
        case 21:
            handleLadder(player, 42, num, () => { });
            return;
        case 28:
            handleLadder(player, 76, num, () => { });
            return;
        case 32: p1sum = 10; break;
        case 36: p1sum = 6; break;
        case 48: p1sum = 26; break;
        case 50:
            handleLadder(player, 67, num, () => { });
            return;
        case 62: p1sum = 18; break;
        case 71:
            handleLadder(player, 92, num, () => { });
            return;
        case 80:
            handleLadder(player, 99, num, () => { });
            return;
        case 88: p1sum = 24; break;
        case 95: p1sum = 56; break;
        case 97: p1sum = 78; break;
    }
    let sum = p1sum;
    document.getElementById(player).style.transition = `linear all .5s`;
    if (sum < 10) {
        document.getElementById(player).style.left = `${(sum - 1) * 62}px`;
        document.getElementById(player).style.top = `${-0 * 62 - correction}px`;
    } else if (sum === 100) {
        winSound.play();
        alert("Red Won!!");
        location.reload();
    } else {
        let numarr = Array.from(String(sum));
        let n1 = eval(numarr.shift());
        let n2 = eval(numarr.pop());
        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(player).style.left = `${9 * 62}px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        } else {
            if (n2 === 0) {
                document.getElementById(player).style.left = `0px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}
// Dice roll button functionality
document.getElementById("diceBtn").addEventListener("click", function () {
    if (questionActive) {
        alert("Please answer the current question before rolling again.");
        return;
    }
    rollingSound.play();
    let num = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = num;
    let diceElement = document.getElementById("dice");
    diceElement.classList.remove('one', 'two', 'three', 'four', 'five', 'six');
    diceElement.classList.add(num.toString());
    showQuestion(num, (correct) => {
        if (correct) {
            play('p1', 'p1sum', 0, num);
        } else {
            p1sum = Math.max(0, p1sum - 1);
            play('p1', 'p1sum', 0, 0);
            alert("Wrong answer! You moved back one step.");
        }
    });
});

