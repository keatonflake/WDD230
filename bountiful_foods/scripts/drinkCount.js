document.getElementById('submit-order').addEventListener('click', function() {
    // Retrieve the current value from local storage (default to 0 if not set)
    var currentOrderCount = localStorage.getItem('orderCount') || 0;

    // Increment the value
    currentOrderCount++;

    // Update the value in local storage
    localStorage.setItem('orderCount', currentOrderCount);

    // You can use the value in your application as needed
    console.log('Orders placed: ' + currentOrderCount);
});