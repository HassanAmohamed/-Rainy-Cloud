# Pixel Precipitation ☁️💧

A beautiful, performant rain animation with dynamic JavaScript controls and CSS animations.



## Features ✨
- 100+ configurable raindrops
- Natural wind movement variations
- Smooth fade-in/out effects
- Mobile-responsive design
- Self-cleaning animation system
- Performance-optimized rendering

## Installation
```bash
git clone https://github.com/your-username/pixel-precipitation.git
cd pixel-precipitation
open rain.html
Configuration
Edit rain.js to customize:

javascript
Copy
const CONFIG = {
    DROP_COUNT: 150,       // Number of drops
    MIN_DURATION: 3,       // Fastest drop speed (s)
    MAX_DURATION: 8,       // Slowest drop speed
    WIND_VARIATION: 0.3    // Horizontal movement
};
Custom Styles
Modify CSS variables in rain.css:

css
Copy
:root {
    --drop-color: #5d9cec;   /* Rain color */
    --container-width: 400px; /* Cloud width */
}
How It Works
Generates <i> elements as raindrops

Applies randomized CSS transforms

Uses will-change for GPU acceleration

Self-adjusts on window resize