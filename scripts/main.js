function respond(message){
    let statement = document.createElement("p");
    statement.className= "statement";
    statement.innerHTML = message;
    document.getElementById("chat-messages").appendChild(statement);
}

function ask(user_prompt){
    let statement = document.createElement("p");
    statement.className= "statement user-statement";
    statement.innerHTML = user_prompt;
    if(document.getElementById('prompt-message').value != ""){
        document.getElementById("chat-messages").appendChild(statement);
        document.getElementById('prompt-message').value = "";
    }
    return user_prompt;
}

    respond("Hi, I'm Mike!")
    respond("I am supposed to make you laugh in the seconds displayed.")
    respond("Are you ready?!")
    if(ask(user_prompt)[0] == 'y'.toLocaleLowerCase()){
        respond("Great. Let's Gooooo!")
    }