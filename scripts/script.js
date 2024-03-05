// import commands from "commands.js";

let elements = {
    "output": document.getElementById("output"),
    "prompt": document.getElementById("prompt"),
};

let commands = {
    "about": `Hello,<br />
    I am Mathew Sjoquist. I enjoy reading, playing games, and solving puzzles.
    `,
    "skills": `{<br />
        "languages": ["Java", "JavaScript", "Python"],<br />
        "frameworks": ["Spring", "Express"],<br />
        "architectures": ["Microservices", "RESTful"],<br />
        "tools": ["Git", "Docker"],<br />
        "databases": ["SQL", "MongoDB", "Neo4j"],<br />
    }`,
    "contact": `{<br />
        "email": "mathew.sjoquist@gmail.com",<br />
        "indeed": "https://profile.indeed.com/p/mathews-kyl8pg9",<br />
        "linkedin": "https://www.linkedin.com/in/mathew-sjoquist-8558bb299",<br />
    }`,
    "help": `{<br />
        "about": "About me",<br />
        "skills": "Technical skills",<br />
        "contact": "Contact information",<br />
        "help": "This description",<br />
    }`,
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
