document.addEventListener("DOMContentLoaded", () => {
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const apologyBox = document.getElementById("apology-box");

    // Video Elements
    const videoUpload = document.getElementById("video-upload");
    const uploadLabel = document.getElementById("upload-label");
    const videoOverlay = document.getElementById("video-overlay");
    const apologyVideo = document.getElementById("apology-video");
    const clickableHeart = document.getElementById("clickable-heart");
    const closeVideo = document.getElementById("close-video");

    let videoUrl = "";

    // Handle Video Upload
    videoUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            videoUrl = URL.createObjectURL(file);
            apologyVideo.src = videoUrl;
            uploadLabel.innerText = "Video Uploaded ✔️"; // Change text to confirm
        }
    });

    // Handle Click on Heart
    clickableHeart.addEventListener("click", () => {
        if (videoUrl) {
            videoOverlay.style.display = "block";
            apologyVideo.volume = 1.0; // Ensure volume is up
            apologyVideo.play();
        } else {
            alert("Please upload a video first using the button at the top!");
        }
    });

    // Close Video Player
    closeVideo.addEventListener("click", () => {
        videoOverlay.style.display = "none";
        apologyVideo.pause();
    });

    // Sequence the text animations
    setTimeout(() => {
        text1.classList.remove("hidden");
        text1.classList.add("show");
    }, 1000); 

    setTimeout(() => {
        text1.classList.remove("show");
        text1.classList.add("hidden");
    }, 4500); 

    setTimeout(() => {
        text1.style.display = 'none'; 
        text2.style.display = 'block';
        
        setTimeout(() => {
            text2.classList.remove("hidden");
            text2.classList.add("show");
        }, 50);
    }, 6000); 

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
    }, 11000); 

    // Continuous Falling Flowers and Hearts Generator
    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        
        const emojis = ['🌸', '🌺', '💖', '🌷', '✨', '🤍', '🌹'];
        item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = Math.random() * 3 + 3 + 's'; 
        item.style.fontSize = Math.random() * 20 + 15 + 'px'; 
        item.style.opacity = Math.random() * 0.5 + 0.5;
        
        document.getElementById('flower-container').appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 6000);
    }

    setInterval(createFallingItem, 250);
});
