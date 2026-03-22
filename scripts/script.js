let elements = {
  output: document.getElementById("output"),
  prompt: document.getElementById("prompt"),
  console: document.getElementById("console"),
};

function runCommand(event) {
  if (event.key !== "Enter") {
    return;
  }

  let input = elements.prompt.value;
  elements.prompt.value = "";

  let command = document.createElement("div");
  command.innerHTML = `┌──(guest@mathew.sjoquist)-[~]<br />
                       └─$ ${input}`;
  elements.console.insertBefore(command, elements.prompt.parentElement);

  input = input.toLowerCase().split(/\s+/);
  if (commands[input[0]] === undefined) {
    elements.output.innerHTML += `<p>Command "${input[0]}" not found. Type "help" for a list of commands.</p>`;
  } else {
    let output = document.createElement("p");
    output.innerHTML = `${commands[input[0]]}`;
    elements.console.insertBefore(output, elements.prompt.parentElement);
  }
}

const commands = {
  about: `Hello,<br />
    I am Mathew Sjoquist. I enjoy reading, playing games, and solving puzzles.<br />
    I earned my degree in Software Engineering from Neumont College of Computer Science in Salt Lake City, Utah.
    `,
  skills: `{<br />
        "languages": ["Java", "JavaScript", "Python"],<br />
        "frameworks": ["Spring", "Express"],<br />
        "architectures": ["Microservices", "RESTful"],<br />
        "tools": ["Git", "Docker"],<br />
        "databases": ["SQL", "MongoDB", "Neo4j"],<br />
    }`,
  contact: `{<br />
        "email": "mathew.sjoquist@gmail.com",<br />
        "indeed": "https://profile.indeed.com/p/mathews-kyl8pg9",<br />
        "linkedin": "https://www.linkedin.com/in/mathew-sjoquist-8558bb299",<br />
    }`,
  help: `about &nbsp; About me<br />
        skills &nbsp; Technical skills<br />
        contact &nbsp; Contact information<br />
        help &nbsp; This description`,
};
