// variable declaration and definition
const panels = document.querySelectorAll('.panel');

// function for the 1st event listener
function toggleOpen() {
    this.classList.toggle('open');
}

// function for the 2nd event listener
function toggleActive(event) {
    console.log(event.propertyName);
    if(event.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

// Listeners
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
