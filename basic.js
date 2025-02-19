const bubbleContainer = document.querySelector('.bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size
    const size = Math.random() * 20 + 10; // Bubbles between 10px and 30px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Random position (horizontal)
    const x = Math.random() * 100; // Percentage across the container
    bubble.style.left = x + '%';

    // Random animation duration (to vary the flow)
    const duration = Math.random() * 3 + 3; // Between 3 and 6 seconds
    bubble.style.animationDuration = duration + 's';

    // Random start delay (to stagger the bubbles)
    const delay = Math.random() * 2; // Up to 2 seconds delay
    bubble.style.animationDelay = delay + 's';

    // Add a slight blur (optional)
    bubble.style.filter = `blur(${Math.random() * 2}px)`;

    bubbleContainer.appendChild(bubble);

    // Remove the bubble after the animation finishes (important for performance)
    bubble.addEventListener('animationend', () => {
        bubbleContainer.removeChild(bubble);
    });
}

// Create bubbles periodically
setInterval(createBubble, 200); // Create a new bubble every 200 milliseconds (adjust as needed)