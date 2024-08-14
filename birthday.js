// Function to reveal the invitation content and hide the initial card
function revealInvitation() {
    // Hide the initial page (button card)
    const initialPage = document.getElementById('initial-page');
    initialPage.style.opacity = '0';
    setTimeout(() => {
        initialPage.style.display = 'none';

        // Show the invitation page
        const invitationPage = document.getElementById('invitation-page');
        invitationPage.classList.remove('hidden');
        invitationPage.style.opacity = '1';

        // Trigger the confetti effect
        launchConfetti();
    }, 500); // Wait for the fade-out effect before hiding the initial page completely
}

// Function to create and animate confetti
function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    const colors = ['#ff6a6a', '#ffb6c1', '#ffe6e6', '#ffffff'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation is done
    setTimeout(() => {
        confettiContainer.innerHTML = '';
        confettiContainer.classList.add('hidden');
    }, 4000); // Confetti falls for 3 seconds, so remove after 4 seconds
}

