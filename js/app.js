/* Alert for Special Covid Pricing */
const covid = document.querySelector('.covid');

// Moves bar up 50px and out of view
function hideCovidBar() {
    covid.style.transform = 'translateY(-50px)';
}

//Sets timer for when bar disappears
window.setTimeout('hideCovidBar();', 3000);


/* Have Navigation Bar reappear when scrolling up */
const navBar = document.querySelector('.nav-bar');

function navBarUpScroll() {
    window.onscroll = function(e) {
        if (window.scrollY > 90) {
        if (this.oldScroll > this.scrollY) {
            navBar.style.opacity = 1;
            navBar.style.zIndex = 0;
        } else {
            navBar.style.opacity = 0;
            navBar.style.zIndex = -2;
        }
        this.oldScroll = this.scrollY;
    }
    }
}
navBarUpScroll();


/* Ingredient Navigation Menu */
tabButtons = document.querySelectorAll('.tab button');
tabContents = document.querySelectorAll('.tabcontent');

tabButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        tabButtons.forEach((item) => {
            item.className = 'tabButton';
        })
        e.target.className = 'tabButton active';
        tabContents.forEach((itemB) => {
            itemB.className = 'tabcontent';
        })
        selectedButton = e.target.innerHTML;
        selectedContent = document.querySelector(`#${selectedButton}`);
        selectedContent.className += ' active';
    })
})


/* Button to go Back to Top of page */
topButton = document.querySelector('.topButton');

// If page is scrolled down 20 then button will appear
const showButton = function() {
    let y = window.scrollY;
    if (y>20) {
        topButton.setAttribute('class', 'topButtonActive');
    } else {
        topButton.setAttribute('class', 'topButton');
    }
}

window.addEventListener('scroll', showButton);

// Scroll back to top slowly when button is pressed
topButton.addEventListener('click', function (e) {
    e.preventDefault();
    const scrollUp = function () {
        const yVal = document.documentElement.scrollTop || document.body.scrollTop;
        if (yVal > 0) {
            window.requestAnimationFrame(scrollUp);
            window.scrollTo(0, yVal - yVal / 10);
        }
    }
    scrollUp();
})

