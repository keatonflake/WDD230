const darkmode = document.querySelector('.darkmode-button');
console.log('dark')

darkmode.addEventListener('click', ()=>{
    if (darkmode.textContent == '🌙'){
        document.documentElement.style.setProperty('--light', 'black');
        document.documentElement.style.setProperty('--dark', '#999999');
        document.documentElement.style.setProperty('--primary', '#4B5A6C');
        document.documentElement.style.setProperty('--black', 'white');
        darkmode.textContent = '🌞';
    }
    else{
        document.documentElement.style.setProperty('--light', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--dark', 'rgb(121, 126, 126)');
        document.documentElement.style.setProperty('--primary', '#7388a0');
        document.documentElement.style.setProperty('--black', 'black');
        document.documentElement.style.setProperty('--white', 'white');
        darkmode.textContent = '🌙';

    }
})
