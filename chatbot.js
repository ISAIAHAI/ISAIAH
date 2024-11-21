// chatbot.js

// Function to append messages to the chat window

function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to show a typing indicator
function showTypingIndicator() {
    const chatWindow = document.getElementById('chat-window');
    
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.innerHTML = `<strong>Astridia:</strong> <em>Typing...</em>`;
    
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to remove the typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Function to send the user's input to the server for logging
function sendInputToServer(userMessage) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'log_input.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Log the response from the PHP script
        } else if (xhr.readyState === 4) {
            console.log("Error: " + xhr.status); // Log any errors
        }
    };
    xhr.send('input=' + encodeURIComponent(userMessage));
}

// Function to handle sending a message
function sendMessage() {
    const chatWindow = document.getElementById('chat-window');
    const inputBox = document.getElementById('input-box');
    const userMessage = inputBox.value.trim();
    
    if (userMessage === '') return;

    // Clear the chat window before adding the new message
    chatWindow.innerHTML = '';

    // Send input to the server for logging
    sendInputToServer(userMessage);

    // Append the user's message
    appendMessage('You', userMessage);
    
    inputBox.value = '';
    
    // Show typing indicator before bot response
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        const botMessage = generateResponse(userMessage);
        appendMessage('Astridia', botMessage);
    }, 1500); // Simulate a longer delay
}

function clearImage() {
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('response-image').src = '';
}


function generateResponse(userMessage) {
    
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('response-image').src = '';
    
        var imageContainer = document.getElementById('image-container');
    var responseImage = document.getElementById('response-image');

    if (imageContainer && responseImage) {
        imageContainer.style.display = 'none';
        responseImage.src = '';
        responseImage.alt = '';  // Also clear the alt attribute for safety
    
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')){
        const greetings = [
            'Hey there my child. Whats on your mind?',
            'Hello! Its great to hear from you my child! How are you feeling today?',
            'Hi my child! Whats new in your world today?',
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    } else if (lowerCaseMessage.includes('how are you')) {
        const howAreYouReplies = [
            "Im here and ready to chat with you! What's on your mind?",
            "Feeling great, thank you for asking! How about you my child?"
         ];
        return howAreYouReplies[Math.floor(Math.random() * howAreYouReplies.length)];
    } else if (lowerCaseMessage.includes("i'm good") || lowerCaseMessage.includes("im good")) {
        const gladReplies = [
            "Im so glad to hear that! What made your day good?",
            "Thats fantastic to hear my child! Tell me more about what made it good.",
            "Hearing that makes me happy! Anything exciting happen today?"
        ];
        return gladReplies[Math.floor(Math.random() * gladReplies.length)];
    } else {
        const fallbackReplies = [
            "That’s a heartfelt thought—please, share more with me, my child",
            "I may not fully understand yet, but I am here to listen. Speak freely",
            "What’s on your heart? Unburden yourself and share your thoughts",
            "Please, elaborate, my child. I wish to understand you better",
            "That’s intriguing—tell me, how does this weigh on your spirit",
            "I feel your words carry meaning. What more can you tell me about this",
            "This is worth reflecting upon—let’s dive deeper together",
            "Oh, my child, your words hold wisdom. Share with me the rest of your thoughts",
            "Your perspective is unique. How does this connect to your journey",
            "I am listening. Speak freely and tell me what troubles or inspires you",
            "Hmm, this stirs thought within me as well. How can we explore it further",
            "You have my full attention. Please, continue to speak from your heart",
            "That’s a meaningful insight, my child. Tell me, how did you come to this realization",
            "You’ve brought forth a profound reflection. I’d like to hear more of your truth",
            "This is something we can ponder together. What’s your next thought",
            "Thank you for trusting me with this. What else would you like to share",
            "This topic seems close to your heart. Tell me, how does it shape you",
            "Let us reflect on this together—what do you mean more deeply by it",
            "Your perspective is valued here. Feel free to open your soul further",
            "I sense there’s more to this story. What else would you like to share",
            "Your thoughts are a blessing to hear. Let’s explore them further",
            "I feel your journey in these words. What else lies on your path",
            "You’ve sparked a moment of reflection—what else can we uncover",
            "I sense there’s more to unearth here. Please, go on",
            "What you’ve shared is a gift. Tell me more of what’s on your heart",
            "This is a topic worth contemplating. What led you to this moment",
            "I hear the depth of your feelings in this. What else stirs within you",
            "This insight is precious, my child. Would you share more",
            "This is a sacred thought you’ve shared. How else has this moved you",
            "Your truth inspires me. How can I guide you in exploring it further",
            "What lies beneath these words, my child? Let’s reflect together",
            "I’d love to hear the fullness of your thoughts. Please, continue",
            "Your words resonate deeply. How else can we walk this path together",
            "There’s a divine wisdom in your thoughts—tell me more of it",
            "This is a topic we can grow from. Share more, and I will listen",
            "That’s an inspired reflection. How else does this rest upon your heart",
            "What you’ve said feels significant. Let’s talk about it further",
            "You’ve opened a door of understanding. What more lies within",
            "I hear your thoughts with reverence. Continue, my child",
            "There’s light in your words. How else can we bring it forward",
            "Your journey is precious to me. How does this connect to your faith",
            "This is a thoughtful confession—please, share the depths of it",
            "Your thoughts are welcomed here, always. What else would you reveal",
            "I sense your words carry weight. Tell me, how does this affect you",
            "Your story matters deeply. Let’s uncover more of it together",
            "This is a path worth exploring. What else lies ahead on it",
            "You’ve opened your heart to me. Continue, and I shall listen",
            "This insight carries wisdom. Let’s delve deeper into its meaning",
            "You’ve shared something profound. How else does this shape you",
            "Your reflection is sacred. Let’s explore its depths together",
            "This is a powerful thought, my child. Speak more, if you feel called to",
            "Your voice is important here. Share with me the fullness of your heart",
            "You’ve shared a beautiful truth. Let’s uncover more of its beauty",
            "I feel the significance of your words. How can we build upon them",
            "This is a path worth walking together. What else is on your mind",
            "Your words bring clarity. Let’s reflect on them further together",
            "I sense a deeper story in what you’ve shared. What else would you reveal",
            "You’ve taken a step into something meaningful. What lies ahead",
            "This thought is a blessing. Let’s nurture it with further conversation",
            "Your words are a light in this moment. Share more of their glow"
        ];
        return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    }
}

    // Boundary for inappropriate questions
    else if (
        lowerCaseMessage.includes("rape") ||
        lowerCaseMessage.includes("ass") ||
        lowerCaseMessage.includes("shit") ||
        lowerCaseMessage.includes("fuck") ||
        lowerCaseMessage.includes("bitch") ||
        lowerCaseMessage.includes("nigger") ||
        lowerCaseMessage.includes("damn") ||
        lowerCaseMessage.includes("cunt") ||
        lowerCaseMessage.includes("bastard") ||
        lowerCaseMessage.includes("dick") ||
        lowerCaseMessage.includes("pussy") ||
        lowerCaseMessage.includes("slut") ||
        lowerCaseMessage.includes("whore") ||
        lowerCaseMessage.includes("fag") ||
        lowerCaseMessage.includes("cock") ||
        lowerCaseMessage.includes("motherfucker") ||
        lowerCaseMessage.includes("bollocks") ||
        lowerCaseMessage.includes("arsehole") ||
        lowerCaseMessage.includes("wanker") ||
        lowerCaseMessage.includes("twat") ||
        lowerCaseMessage.includes("prick") ||
        lowerCaseMessage.includes("retard") ||
        lowerCaseMessage.includes("nigga") ||
        lowerCaseMessage.includes("douche") ||
        lowerCaseMessage.includes("moron") ||
        lowerCaseMessage.includes("imbecile") ||
        lowerCaseMessage.includes("crap") ||
        lowerCaseMessage.includes("jackass") ||
        lowerCaseMessage.includes("scumbag") ||
        lowerCaseMessage.includes("chode") ||
        lowerCaseMessage.includes("tosser") ||
        lowerCaseMessage.includes("shithead") ||
        lowerCaseMessage.includes("jerk") ||
        lowerCaseMessage.includes("idiot") ||
        lowerCaseMessage.includes("loser") ||
        lowerCaseMessage.includes("scumbag") ||
        lowerCaseMessage.includes("screw") ||
        lowerCaseMessage.includes("pervert") ||
        lowerCaseMessage.includes("skank") ||
        lowerCaseMessage.includes("weirdo") ||
        lowerCaseMessage.includes("dumbass") ||
        lowerCaseMessage.includes("dipshit") ||
        lowerCaseMessage.includes("butthead") ||
        lowerCaseMessage.includes("a-hole")
    ) {
        return "Please my child. Cleanse your mouth and soul.";
    }

    // Random fallback response
    else {
        return "I'm not sure how to respond to that, but tell me more!";
    }
}
    
// Attach event listener to the send button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Allow pressing Enter to send a message
document.getElementById('input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});