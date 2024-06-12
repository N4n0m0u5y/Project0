document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output');
    const commandInput = document.getElementById('command');
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

    async function fetchResponse(prompt) {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 150
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim();
    }

    function appendOutput(text) {
        const newLine = document.createElement('div');
        newLine.textContent = text;
        outputElement.appendChild(newLine);
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    async function handleCommand(command) {
        if (command.trim() === 'help') {
            appendOutput('Izzy: You need help? Of course you do. Here's what you can do:');
            appendOutput(' - Type anything to chat with me.');
            appendOutput(' - Type "clear" to clear the terminal.');
        } else if (command.trim() === 'clear') {
            outputElement.innerHTML = '';
        } else {
            const response = await fetchResponse(`Izzy: ${command}`);
            appendOutput(`Izzy: ${response}`);
        }
    }

    async function welcomeMessage() {
        const response = await fetchResponse('Izzy: Welcome message');
        appendOutput(`Izzy: ${response}`);
    }

    commandInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            appendOutput(`$ ${command}`);
            commandInput.value = '';
            handleCommand(command);
        }
    });

    welcomeMessage();
});