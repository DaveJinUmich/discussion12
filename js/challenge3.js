// Challenge 3

// When the page is loaded an alert box should pop up with the Caption from the 2nd figure
document.addEventListener('DOMContentLoaded', function() {
    const secondFigureCaption = document.querySelectorAll('figure')[1].querySelector('figcaption').textContent;
    alert(secondFigureCaption);
    
    const secondImage = document.querySelectorAll('.thumbnail')[1];
    secondImage.setAttribute('tabindex', '0');
});

// When the mouse goes over an image three things should happen:
// The background image of the display should change to the same image being hovered over.  
// The text in the display should show the alt attribute of the image
// The image should no longer be visible – but it should still take up the same amount of space.
function handleFocusOrHover(event) {
    const displayElement = document.getElementById('display');
    const imageElement = event.target;
    displayElement.style.backgroundImage = `url(${imageElement.src})`;
    displayElement.textContent = imageElement.alt;
    imageElement.style.opacity = '0';
}

// When the mouse leaves an image, the page should revert back.
function handleBlurOrLeave(event) {
    const displayElement = document.getElementById('display');
    displayElement.style.backgroundImage = '';
    displayElement.textContent = 'Hover over an image';
    event.target.style.opacity = '1';
}

const thumbnails = document.querySelectorAll('.thumbnail');

// Add event listeners to each thumbnail
thumbnails.forEach(function(thumbnail) {
    // Mouse events
    thumbnail.addEventListener('mouseover', handleFocusOrHover);
    thumbnail.addEventListener('mouseout', handleBlurOrLeave);
    
    // Keyboard (tab) events
    thumbnail.addEventListener('focus', handleFocusOrHover);
    thumbnail.addEventListener('blur', handleBlurOrLeave);
});