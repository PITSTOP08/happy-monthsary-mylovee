document.addEventListener('DOMContentLoaded', () => {
    const garden = document.getElementById('garden');
    const sky = document.getElementById('sky');
    const isMobile = window.innerWidth < 768;

    // 1. Generate Stars
    const starCount = isMobile ? 70 : 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = `${Math.random() * 3}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 70}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        sky.appendChild(star);
    }

    // 2. Generate Grass
    const grassCount = isMobile ? 60 : 120;
    for (let i = 0; i < grassCount; i++) {
        const blade = document.createElement('div');
        blade.className = 'grass';
        blade.style.left = `${Math.random() * 100}%`;
        blade.style.height = `${isMobile ? 25 : 40 + Math.random() * 60}px`;
        blade.style.animationDelay = `${Math.random() * -5}s`;
        garden.appendChild(blade);
    }

    // 3. Generate Sunflowers
    function spawnFlower(side, index) {
        const flower = document.createElement('div');
        flower.className = 'sunflower';
        
        let xPos;
        if (isMobile) {
            // Keep the center 40% of the screen clear of flowers
            xPos = (side === 'left') ? (index * 10) : (100 - (index * 10) - 10);
        } else {
            // Desktop spread
            xPos = (side === 'left') ? (2 + (index * 6)) : (68 + (index * 6));
        }

        const delay = index * 0.3;
        
        // Shorter stems to avoid overlapping the greeting
        const stemHeight = isMobile ? (60 + Math.random() * 50) : (140 + Math.random() * 120);

        flower.style.left = `${xPos}%`;
        flower.style.animation = `grow-up 2s ease-out ${delay}s forwards, sway 5s ease-in-out infinite ${delay + 2}s`;

        flower.innerHTML = `
            <div class="flower-head">
                <div class="petals-container"></div>
                <div class="center-disc"></div>
                <div class="firefly" style="--d:4s; top:0; left:10px;"></div>
                <div class="firefly" style="--d:6s; top:20px; left:-20px;"></div>
            </div>
            <div class="stem" style="height: ${stemHeight}px">
                <div class="leaf leaf-1"></div>
                <div class="leaf leaf-2"></div>
            </div>`;

        const container = flower.querySelector('.petals-container');
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            p.className = 'petal';
            p.style.transform = `translate(-50%, -100%) rotate(${i * 20}deg)`;
            container.appendChild(p);
        }
        garden.appendChild(flower);
    }

    // Limit flower count on small screens to 3 per side
    const count = isMobile ? 3 : 5;
    for (let i = 0; i < count; i++) {
        spawnFlower('left', i);
        spawnFlower('right', i);
    }

    document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing star, grass, and sunflower code)

    // --- Music Logic ---
    const music = document.getElementById('bg-music');
    
    // Set volume (0.0 to 1.0)
    music.volume = 0.5;

    const playMusic = () => {
        music.play().then(() => {
            // Success! Music is playing.
            // Remove listeners so we don't keep trying to play.
            document.removeEventListener('click', playMusic);
            document.removeEventListener('touchstart', playMusic);
        }).catch((error) => {
            console.log("Autoplay blocked. Waiting for user interaction.");
        });
    };

    // Try to play immediately
    playMusic();

    // Fallback: Play on first click or touch (for mobile/Chrome)
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);
});
});