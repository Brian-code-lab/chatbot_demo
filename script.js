document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // Sample responses for the demonstration
    const responses = {
        // Career-related questions
        'career': [
            "Tech careers are diverse and constantly evolving. Popular paths include software development, data science, cybersecurity, and AI/ML engineering.",
            "When starting a tech career, focus on building a strong foundation in fundamentals, creating projects for your portfolio, and networking with professionals.",
            "To stay relevant in tech, dedicate time to continuous learning, follow industry trends, and participate in communities related to your field."
        ],
        
        // Tech trends
        'trend': [
            "AI and machine learning continue to be major trends, with applications expanding across industries like healthcare, finance, and transportation.",
            "Edge computing is gaining traction as it brings computation closer to data sources, reducing latency and bandwidth usage.",
            "Augmented and virtual reality technologies are advancing rapidly, creating new opportunities in gaming, education, and remote collaboration."
        ],
        
        // Event information
        'event': [
            "This demo is part of a tech expo showcasing various AI applications and innovations.",
            "The expo features demonstrations from leading tech companies and startups, panel discussions, and networking opportunities.",
            "This chatbot demonstration shows how AI can understand and respond to natural language queries."
        ],
        
        // Default responses
        'default': [
            "I'm a demo chatbot trained to discuss careers, tech trends, and event information. What would you like to know about?",
            "I don't have information about that topic. Try asking about careers in tech, technology trends, or details about this event.",
            "That's an interesting question! While I'm limited to career advice, tech trends, and event information, I'd be happy to discuss those topics."
        ]
    };

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        chatBox.appendChild(messageDiv);
        
        // Auto scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to process user input and generate response
    function processUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;
        
        // Add user message to chat
        addMessage(userMessage, true);
        
        // Clear input field
        userInput.value = '';
        
        // Show typing indicator
        setTimeout(() => {
            // Generate response
            const botMessage = generateResponse(userMessage);
            addMessage(botMessage);
        }, 600); // Slight delay to simulate thinking
    }

    // Function to generate a response based on user input
    function generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Check for career-related questions
        if (message.includes('career') || message.includes('job') || message.includes('profession') || 
            message.includes('work') || message.includes('employment') || message.includes('hiring')) {
            return responses.career[Math.floor(Math.random() * responses.career.length)];
        }
        
        // Check for tech trend questions
        if (message.includes('trend') || message.includes('future') || message.includes('innovation') || 
            message.includes('technology') || message.includes('emerging') || message.includes('newest')) {
            return responses.trend[Math.floor(Math.random() * responses.trend.length)];
        }
        
        // Check for event-related questions
        if (message.includes('event') || message.includes('expo') || message.includes('conference') || 
            message.includes('this demo') || message.includes('demonstration') || message.includes('showcase')) {
            return responses.event[Math.floor(Math.random() * responses.event.length)];
        }
        
        // Default response
        return responses.default[Math.floor(Math.random() * responses.default.length)];
    }

    // Event listeners
    sendBtn.addEventListener('click', processUserInput);
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processUserInput();
        }
    });

    // Focus on input when page loads
    userInput.focus();
});

// In a real implementation, this would connect to an API like OpenAI
// Example of how you would integrate with OpenAI's API:
/*
async function callOpenAI(userMessage) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant that provides information about careers, tech trends, and event details.' },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 150
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return "I'm having trouble connecting right now. Please try again later.";
    }
}
*/ 