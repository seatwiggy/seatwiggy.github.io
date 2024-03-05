import commands from "commands.js";

let elements = {
    "output": document.getElementById("output"),
    "prompt": document.getElementById("prompt"),
};

function runCommand(event) {
    if (event.key !== "Enter") {
        return;
    }

    let command = elements.prompt.value;
    elements.prompt.value = "";
    command = command.toLowerCase().split(/\s+/);

    elements.output.innerHTML += `<p>${command}</p>`;
    elements.output.innerHTML += `<p>${commands[command[0]]}</p>`;
}
