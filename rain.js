function createRain() {
    const CONFIG = {
        DROP_COUNT: 100,          // Optimal number for performance
        MIN_DURATION: 5,           // Minimum animation duration (seconds)
        MAX_DURATION: 10,          // Maximum animation duration
        MAX_DELAY: 30,             // Maximum delay before animation starts
        WIND_VARIATION: 0.2,       // Horizontal movement variation
        SIZE_VARIATION: 0.5        // Size variation multiplier
    };

    const container = document.querySelector(".container");
    if (!container) return;  // Safety check

    // Clear existing drops (if any)
    container.querySelectorAll('i').forEach(drop => drop.remove());

    // Create rain particles
    for (let i = 0; i < CONFIG.DROP_COUNT; i++) {
        const drop = document.createElement("i");
        
        // Calculate random properties
        const posX = Math.random() * container.offsetWidth;
        const delay = Math.random() * CONFIG.MAX_DELAY * -1;
        const duration = CONFIG.MIN_DURATION + Math.random() * (CONFIG.MAX_DURATION - CONFIG.MIN_DURATION);
        const size = 5 + Math.random() * 5 * CONFIG.SIZE_VARIATION;
        const wind = (Math.random() - 0.5) * CONFIG.WIND_VARIATION * 100;

        // Apply styles
        drop.style.cssText = `
            left: ${posX}px;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            transform: rotate(45deg) translateX(${wind}px);
            opacity: ${0.7 + Math.random() * 0.3};
        `;

        container.appendChild(drop);
    }
}

// Initialize rain with performance optimization
document.addEventListener('DOMContentLoaded', () => {
    createRain();
    
    // Optional: Refresh rain periodically
    setInterval(() => {
        requestAnimationFrame(createRain);
    }, 25000);  // Every 25 seconds
});

// Resize handler for responsive behavior
window.addEventListener('resize', () => {
    requestAnimationFrame(createRain);
});
