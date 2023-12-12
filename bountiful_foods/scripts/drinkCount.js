document.getElementById('submit-order').addEventListener('click', function() {
    // Retrieve the current value from local storage (default to 0 if not set)
    var currentOrderCount = localStorage.getItem('orderCount') || 0;

    // Increment the value
    currentOrderCount++;

    localStorage.setItem('orderCount', currentOrderCount);
});