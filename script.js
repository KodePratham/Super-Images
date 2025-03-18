// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to team cards for potential future functionality
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            // Highlight the selected card
            teamCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });
    
    // Image loading error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Image not available';
        }
    });
});
