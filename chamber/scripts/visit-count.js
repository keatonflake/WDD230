const lastVisit = localStorage.getItem('lastVisit');

        // Get the current date
        const currentDate = Date.now();

        // If this is the user's first visit
        if (!lastVisit) {
            localStorage.setItem('lastVisit', currentDate);
            document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const timeDifference = currentDate - lastVisit;
            const millisecondsInDay = 1000 * 60 * 60 * 24;
            const daysDifference = Math.floor(timeDifference / millisecondsInDay);

            if (daysDifference < 1) {
                document.getElementById('message').textContent = "Back so soon! Awesome!";
            } else {
                const message = (daysDifference === 1) ? "day" : "days";
                document.getElementById('message').textContent = `You last visited ${daysDifference} ${message} ago.`;
            }

            // Update the last visit date in localStorage
            localStorage.setItem('lastVisit', currentDate);
        }