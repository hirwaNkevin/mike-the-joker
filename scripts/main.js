function respond(message){
    document.getElementById("chat-messages").innerHTML='<p class="statement">'+message+'</p>';
}

respond("Hello!")

function ask(prompt){
    document.getElementById("chat-messages").innerHTML='<p class="user-statement statement">'+prompt+'</p>';
    document.getElementById('prompt-message').value = "";
}