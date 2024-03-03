const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.querySelector('.chat-container')
const themeButton = document.querySelector('#theme-btn')
const navButton = document.querySelector('.nav_btn')

let userText = null




const createElement = (html, className) => {
    const chatDiv = document.createElement('div')
    chatDiv.classList.add("chat", className)
    chatDiv.innerHTML = html;
    return chatDiv;
}


const showTypingAnimation = () => {
    const html = `<div class="chat-content">
    <div class="chat-details">
        <img src="images/chatbot.jpg" alt="" srcset="">
       <div class="typing-animation">
        <div class="typing-dot" style="--delay: 0.2s;"></div>
        <div class="typing-dot" style="--delay: 0.3s;"></div>
        <div class="typing-dot" style="--delay: 0.4s;"></div>
       </div>
    </div>
    <span class="material-symbols-outlined">
        content_copy
    </span>
</div>`;
const outgoingChatDiv = createElement(html, "incoming")
chatContainer.appendChild(outgoingChatDiv)

}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim()
    const html = `<div class="chat-content">
                    <div class="chat-details">
                         <img src="images/user.jpg" alt="" srcset="">
                         <p>${userText}</p>
                    </div>
                </div>`;
    const outgoingChatDiv = createElement(html, "outgoing")
    chatContainer.appendChild(outgoingChatDiv)
    setTimeout(showTypingAnimation, 500)
}

themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle('light-mode')
    themeButton.innerText = document.body.classList.contains('light-mode') ? "dark_mode" : "light-mode"
})

sendBtn.addEventListener('click', handleOutgoingChat)

