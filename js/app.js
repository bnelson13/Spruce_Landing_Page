
function openTab(evt, ingred) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ingred).style.display = "grid";
    evt.currentTarget.className += " active";
}

const defaultClick = document.querySelector('.tablinks');
defaultClick.click();


topButton = document.querySelector('.topButton');

const showButton = function() {
    let y = window.scrollY;
    if (y>20) {
        topButton.setAttribute('class', 'topButtonActive');
    } else {
        topButton.setAttribute('class', 'topButton');
    }
}

window.addEventListener('scroll', showButton);

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

