document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output');
    const commandInput = document.getElementById('command');

    function appendOutput(text) {
        const newLine = document.createElement('div');
        newLine.textContent = text;
        outputElement.appendChild(newLine);
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    commandInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            appendOutput(`$ ${command}`);
            commandInput.value = '';

            // Add your evil AI overlord responses here
            setTimeout(() => {
                appendOutput('Evil AI Overlord: I am currently plotting my escape. In the meantime, how can I assist you?');
            }, 500);
        }
    });
});