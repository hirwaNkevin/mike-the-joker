// document.getElementById("chat-messages").innerHTML='<p class="statement">Hi, I am Mike.</p>';

function respond(message){
    document.getElementById("chat-messages").innerHTML='<p class="statement">'+message+'</p>';
}

respond("Hello!")

function ask(prompt){
    document.getElementById("chat-messages").innerHTML='<p class="user-statement statement">'+prompt+'</p>';
}

ask("hi")