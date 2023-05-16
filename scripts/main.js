
respond("Hi, I'm Mike!")
respond("I am supposed to make you laugh in the seconds displayed.")
respond("Are you ready?!")

function respond(message){
    let statement = document.createElement("p");
    statement.className= "statement";
    statement.innerHTML = message;
    document.getElementById("chat-messages").appendChild(statement);
}

function ask(prompt){
    let statement = document.createElement("p");
    statement.className= "statement user-statement";
    statement.innerHTML = prompt;
    document.getElementById("chat-messages").appendChild(statement);
    document.getElementById('prompt-message').value = "";
    return prompt;
}