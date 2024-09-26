//INput da mensagem digitada pelo usuario

let inputMessage = document.getElementById("message")

//DIV ONDE IREI EXIBIR AS MENSAGENS DO USUARIO E DO ASSISTENTE
let chatLog = document.getElementById("chat-log")

//ARRAY QUE IRA SLVAR O HISTORICO LOCAL DE MENSAGENS TROCADAS COM O GEMINI
let messages = []

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let messageText = inputMessage.value

    let newMessageGemini = {
        "role": "user",
        "parts":[{"text":messageText}],
    }

    messages.push(newMessageGemini)

    inputMessage.value = ""
    console.log(messages);

    let messageElement = document.createElement("div")
    messageElement.classList.add("message")
    messageElement.classList.add("message--sent")
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `
    chatLog.appendChild(messageElement)

    //REQUISICAO PARA A API LOCAL
    fetch("http://localhost:3000/sendMessage/",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            messages
        })
    }).then(res => res.json())
})