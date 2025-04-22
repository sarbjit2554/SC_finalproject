let currentState = "start";  // Initial state

// Function to render the story question and choices
function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');

    // Clear previous choices
    answersContainer.innerHTML = '';

    switch (currentState) {
        case "start":
            questionContainer.innerHTML = "You are in Winterfell, a cold and mysterious place. A raven arrives with a message. Do you wish to head North to the Wall or South to King's Landing for safety?";
            addAnswerButton("Head North to the Wall", "north");
            addAnswerButton("Head South to King's Landing", "south");
            break;

        case "north":
            questionContainer.innerHTML = "You brave the icy winds and arrive at the Wall. The Night's Watch is recruiting, but rumors of White Walkers spread fear. Do you join the Night's Watch to fight the dead or explore the dangerous Wildlands?";
            addAnswerButton("Join the Night's Watch", "nightsWatch");
            addAnswerButton("Explore the Wildlands", "wildlands");
            break;

        case "south":
            questionContainer.innerHTML = "King's Landing is alive with intrigue. You see the shadow of a dragon overhead. You must decide: do you swear loyalty to Queen Cersei or seek the help of Daenerys and her dragons to overthrow the crown?";
            addAnswerButton("Swear Loyalty to Queen Cersei", "loyaltyCersei");
            addAnswerButton("Join Daenerys Targaryen", "loyaltyDaenerys");
            break;

        case "nightsWatch":
            questionContainer.innerHTML = "You join the Night's Watch and take the black. As you patrol the Wall, you encounter a White Walker! Do you fight bravely or flee back to the Wall?";
            addAnswerButton("Fight the White Walker", "fightWhiteWalker");
            addAnswerButton("Flee to the Wall", "fleeWall");
            break;

        case "wildlands":
            questionContainer.innerHTML = "The Wildlands are unforgiving. You find a hidden cave, but it's inhabited by giants! Do you negotiate with the giants or run before they notice you?";
            addAnswerButton("Negotiate with the giants", "negotiateGiants");
            addAnswerButton("Run away", "runFromGiants");
            break;

        case "loyaltyCersei":
            questionContainer.innerHTML = "You swear loyalty to Queen Cersei, but the court is full of treachery. During a feast, you overhear a plot to poison her. Do you warn her or let the plan unfold to take power for yourself?";
            addAnswerButton("Warn Cersei", "warnCersei");
            addAnswerButton("Let the plot unfold", "betrayCersei");
            break;

        case "loyaltyDaenerys":
            questionContainer.innerHTML = "You join Daenerys and her dragons. She tasks you with infiltrating King's Landing. Do you sneak in through the sewers or confront the city with her dragons?";
            addAnswerButton("Sneak through the sewers", "sewers");
            addAnswerButton("Confront with dragons", "dragonAttack");
            break;

        // Outcome branches
        case "fightWhiteWalker":
            questionContainer.innerHTML = "You draw your sword and fight bravely, but the White Walker is too strong. Just when all seems lost, Jon Snow appears and saves you. You have proven your courage!";
            endGame();
            break;

        case "fleeWall":
            questionContainer.innerHTML = "You flee back to the Wall. The Night's Watch is ashamed of your cowardice, and you are sent to the kitchens. Perhaps this is the end of your journey, but you're still alive.";
            endGame();
            break;

        case "negotiateGiants":
            questionContainer.innerHTML = "You approach the giants cautiously. To your surprise, they listen and agree to let you pass. In fact, they give you a magical horn that can summon them in times of need.";
            endGame();
            break;

        case "runFromGiants":
            questionContainer.innerHTML = "You run as fast as you can, but the giants spot you. With massive strides, they catch up, and your journey ends there.";
            endGame();
            break;

        case "warnCersei":
            questionContainer.innerHTML = "You warn Cersei of the plot, and she rewards you with a high position in her court. But now, you're tangled in the dangerous web of her enemies.";
            endGame();
            break;

        case "betrayCersei":
            questionContainer.innerHTML = "You let the plot unfold. Cersei is poisoned, and you take a place of power in the chaos that follows. But soon, enemies come for you...";
            endGame();
            break;

        case "sewers":
            questionContainer.innerHTML = "You sneak through the sewers and infiltrate the Red Keep. After a daring battle, you unlock a secret passage that leads to the Iron Throne.";
            endGame();
            break;

        case "dragonAttack":
            questionContainer.innerHTML = "You march into battle with Daenerys and her dragons. The skies burn with dragonfire, and King's Landing falls before you. You have helped conquer the Seven Kingdoms!";
            endGame();
            break;

        default:
            questionContainer.innerHTML = "Your adventure has ended. Refresh the page to play again!";
            break;
    }
}

// Function to create a new answer button and append it to the DOM
function addAnswerButton(text, nextState) {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('aria-label', text); // ARIA label for screen readers
    button.tabIndex = 0; // Make button focusable
    button.addEventListener('click', () => {
        currentState = nextState;  // Update the state based on user choice
        renderQuestion();  // Re-render the question based on the new state
    });
    document.getElementById('answers').appendChild(button);
}

// Function to display the end of the game
function endGame() {
    const answersContainer = document.getElementById('answers');
    // Clear existing answer buttons
    answersContainer.innerHTML = '';
    
    const button = document.createElement('button');
    button.innerText = "Play Again";
    button.addEventListener('click', () => {
        currentState = "start";  // Reset to the beginning
        renderQuestion();  // Restart the game
    });
    answersContainer.appendChild(button);
}

// Call renderQuestion when the page loads
window.onload = renderQuestion;
