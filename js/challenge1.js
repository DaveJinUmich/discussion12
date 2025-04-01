// Challenge 1

// When the page is loaded use CSS to style the h1 heading to match example
document.addEventListener('DOMContentLoaded', function() {
    const h1Element = document.querySelector('h1');
    h1Element.classList.add('heading');
});

// If the visitor double-clicks anywhere on the page, 
// an alert button should pop up with the current time.
document.addEventListener('dblclick', function() {
    // Get current time
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    
    // Create and show alert with current time
    alert("Current time: " + currentTime);
});

// If the visitor clicks on the input for “Check to toggle the email” field, 
// modify the page so that the email field is available when the input is checked,
// and not available when it is unchecked.
document.getElementById('toggle').addEventListener('click', function() {
    // Get the email box element
    const emailBox = document.getElementById('emailBox');
    
    // Toggle visibility based on checkbox state
    if (this.checked) {
        emailBox.classList.remove('hidden');
    } else {
        emailBox.classList.add('hidden');
    }
});