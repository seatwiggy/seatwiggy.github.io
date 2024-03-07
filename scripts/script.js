import commands from "./commands.js";

let elements = {
    "output": document.getElementById("output"),
    "prompt": document.getElementById("prompt"),
};

function runCommand(event) {
    if (event.key !== "Enter") {
        return;
    }

    let input = elements.prompt.value;
    elements.prompt.value = "";
    input = input.toLowerCase().split(/\s+/);

    elements.output.innerHTML += `<p>${input}</p>`;
    elements.output.innerHTML += `<p>${commands[input[0]]}</p>`;
}
