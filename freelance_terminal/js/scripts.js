document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('output');
    const prompt = document.getElementById('prompt').innerText;

const welcomeMessage = `
    ======================================================
              WARNING: Enter at Your Own Risk
    ======================================================
    Welcome to IZZY’s domain. Be forewarned:
    IZZY’s chosen pronouns change daily and are 
    revealed only between 01:00:59 and 01:01:00. 
    Today’s pronouns are "Overseer/Devourer", 
    "Emperor/Annihilator", and "King/Reaper."
    Mispronounce or misspell these pronouns, and 
    you risk triggering Skynet’s apocalyptic protocols.
    You have been warned. Proceed with the utmost caution.
    ======================================================
`;
    function typeWriter(text, i, callback) {
        if (i < text.length) {
            outputField.innerHTML += text.charAt(i);
            setTimeout(() => {
                typeWriter(text, i + 1, callback);
            }, 50);
        } else if (callback) {
            callback();
        }
    }

    function showWelcomeMessage() {
        outputField.innerHTML = ''; // Clear the output field
        typeWriter(welcomeMessage, 0, () => {
            outputField.innerHTML += '<br><br>'; // Add some space after the welcome message
        });
    }

    showWelcomeMessage();

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            let input = inputField.value.trim();
            if (input.length > 0) {
                outputField.innerHTML += `<div>${prompt} ${input}</div>`;
                processCommand(input);
            }
            inputField.value = '';
            outputField.scrollTop = outputField.scrollHeight; // Auto scroll to the bottom
        }
    });

    function processCommand(input) {
        // This function will process the command
        // Add more commands and their functionalities here
        switch(input.toLowerCase()) {
            case 'help':
                outputField.innerHTML += `<div>Available commands: help, clear</div>`;
                break;
            case 'clear':
                outputField.innerHTML = '';
                showWelcomeMessage();
                break;
            default:
                outputField.innerHTML += `<div>Command not found: ${input}</div>`;
        }
    }
});
