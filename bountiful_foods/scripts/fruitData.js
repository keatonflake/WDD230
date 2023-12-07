    // Function to load fruit options from fruits.json
    function loadFruitOptions() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var selectOptions = '';
                data.forEach(function (fruit) {
                    selectOptions += '<option value="' + fruit.name + '">' + fruit.name + '</option>';
                });

                // Populate select inputs with fruit options
                for (var i = 1; i <= 3; i++) {
                    document.getElementById('selectOption' + i).innerHTML = selectOptions;
                }
            }
        };

        xhr.open('GET', './fruits.json', true);
        xhr.send();
    }

    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add form validation logic here if needed

        // Redirect to the Order Confirmation page
        window.location.href = 'confirmation.html';
    }

    // Load fruit options when the page is ready
    document.addEventListener('DOMContentLoaded', function () {
        loadFruitOptions();

        // Attach the submitForm function to the form submission event
        document.getElementById('orderForm').addEventListener('submit', submitForm);
    });