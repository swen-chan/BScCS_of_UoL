const button = document.getElementById('button1');

button.addEventListener('mouseover', function() {
    // Change the button's background color when hovered over
    button.style.backgroundColor = 'blue';
});

// Add event listener for mouseout (hover out) event
button.addEventListener('mouseout', function() {
    // Restore the button's original background color when the mouse moves out
    button.style.backgroundColor = ''; // Reset to default or remove inline style
});