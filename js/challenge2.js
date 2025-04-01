// Challenge 2

// When the page is loaded, print the default value of the textarea to the console.  
// Printing JUST the value, no other information.
document.addEventListener('DOMContentLoaded', function() {
    const billingTextarea = document.getElementById('billing');
    console.log(billingTextarea.value.trim());
});

// Steps 2 & 3
document.querySelector('input[name="useBilling"]').addEventListener('change', function() {
    // Get the billing and home textareas
    const billingTextarea = document.getElementById('billing');
    const homeTextarea = document.getElementById('home');
    
    const checkbox = document.querySelector('input[name="useBilling"]');
    // When the checkbox is checked,
    // the information from the billing field is copied into the home address field,
    // and the home element is disabled.
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            const billingTextarea = document.getElementById('billing');
            const homeTextarea = document.getElementById('home');
        
    if (this.checked)
    {
 