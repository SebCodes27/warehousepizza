let toggleNav = () => {
    let x = document.getElementById('nav-hidden');
    if (x.className === 'full-row hidden') {
        x.className = 'full-row'
    } else {
        x.className = 'full-row hidden'
    }
}