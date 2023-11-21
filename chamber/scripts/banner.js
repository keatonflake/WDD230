document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().getDay();
    
    if (today >= 1 && today <= 3) {
        document.getElementById('banner-container').style.display = 'block';
    }
});

function closeBanner() {
    document.getElementById('banner-container').style.display = 'none';
}
