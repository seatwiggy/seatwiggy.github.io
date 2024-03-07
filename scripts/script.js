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
    if (commands[input[0]] === undefined) {
        elements.output.innerHTML += `<p>Command "${input[0]}" not found. Type "help" for a list of commands.</p>`;
    } else {
        elements.output.innerHTML += `<p>${commands[input[0]]}</p>`;
    }
}

const commands = {
    "about": `Hello,<br />
    I am Mathew Sjoquist. I enjoy reading, playing games, and solving puzzles.<br />
    I earned my degree in Software Engineering from Neumont College of Computer Science in Salt Lake City, Utah.
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
    "help": `about &nbsp; About me<br />
        skills &nbsp; Technical skills<br />
        contact &nbsp; Contact information<br />
        help &nbsp; This description`,
};
