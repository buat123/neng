function showHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heartContainer.removeChild(heart);
    }, 2000);
}
