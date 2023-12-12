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

    document.addEventListener('DOMContentLoaded', function () {
        loadFruitOptions();

    });