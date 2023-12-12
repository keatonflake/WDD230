    // Retrieve the current value from local storage (default to 0 if not set)
    var currentOrderCount = localStorage.getItem('orderCount') || 0;

    // Update the content of the span element
    document.getElementById('order-count').textContent = currentOrderCount;