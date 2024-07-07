document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recommendation-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const recommendationsList = document.getElementById('recommendations-list');
    const popupContainer = document.querySelector('.popup-container');
    const popupMessage = document.querySelector('.popup-message');
    const btnOk = document.querySelector('.btn-ok');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (message === '') {
            alert('Please enter a message.');
            return;
        }

        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation-item');
        recommendationItem.innerHTML = `<p><strong>${name || 'Anonymous'}:</strong> ${message}</p>`;

        recommendationsList.prepend(recommendationItem);

        nameInput.value = '';
        messageInput.value = '';

        popupContainer.style.display = 'block';
        popupMessage.style.display = 'block';
      
        // Add an event listener to the OK button
        btnOk.addEventListener('click', () => {
          // Hide the pop-up container and message
          popupContainer.style.display = 'none';
          popupMessage.style.display = 'none';
        });   
    });
});
