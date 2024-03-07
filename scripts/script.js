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
    "help": `{<br />
        "about": "About me",<br />
        "skills": "Technical skills",<br />
        "contact": "Contact information",<br />
        "help": "This description",<br />
    }`,
};
