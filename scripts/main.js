function respond(message){
    let statement = document.createElement("p");
    statement.className= "statement";
    statement.innerHTML = message;
    document.getElementById("chat-messages").appendChild(statement);
}

respond("Hello!")

function ask(prompt){
    let statement = document.createElement("p");
    statement.className= "statement user-statement";
    statement.innerHTML = prompt;
    document.getElementById("chat-messages").appendChild(statement);
    document.getElementById('prompt-message').value = "";
}