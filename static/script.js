document.addEventListener("DOMContentLoaded", () => {
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const apologyBox = document.getElementById("apology-box");

    // Sequence the text animations
    setTimeout(() => {
        text1.classList.remove("hidden");
        text1.classList.add("show");
    }, 1000); // 1 second in, show "Hey meri gudiya..."

    setTimeout(() => {
        text1.classList.remove("show");
        text1.classList.add("hidden");
    }, 4500); // Hide it after a few seconds

    setTimeout(() => {
        text1.style.display = 'none'; // Remove from flow
        text2.style.display = 'block';
        
        // slight delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            text2.classList.remove("hidden");
            text2.classList.add("show");
        }, 50);
    }, 6000); // Show "Gussa kiu ho..."

    setTimeout(() => {
        text2.classList.remove("show");
        text2.classList.add("hidden");
    }, 9500);

    setTimeout(() => {
        text2.style.display = 'none';
        apologyBox.style.display = 'block';
        
        setTimeout(() => {
            apologyBox.classList.remove("hidden");
            apologyBox.classList.add("show");
        }, 50);
    }, 11000); // Finally show the apology box and heart

    // Continuous Falling Flowers and Hearts Generator
    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        
        const emojis = ['🌸', '🌺', '💖', '🌷', '✨', '🤍', '🌹'];
        item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Randomize position, size, and speed
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = Math.random() * 3 + 3 + 's'; // Falls between 3 and 6 seconds
        item.style.fontSize = Math.random() * 20 + 15 + 'px'; // Size between 15px and 35px
        item.style.opacity = Math.random() * 0.5 + 0.5;
        
        document.getElementById('flower-container').appendChild(item);

        // Remove element from DOM after it finishes falling to save memory
        setTimeout(() => {
            item.remove();
        }, 6000);
    }

    // Generate a new flower/heart every 250 milliseconds
    setInterval(createFallingItem, 250);
});
