$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Experience | Portfolio Ankit Sahu";
            $("#favicon").attr("href", "./assets/images/favicon.ico");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "./assets/images/favhand.png");
        }
    });

// fetch experience start
function getExperience() {
    return fetch("experience.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

function showExperience(experiences) {
    let experienceContainer = document.getElementById("experienceContainer");
    let experienceHTML = "";
    experiences.forEach((exp, index) => {
        let side = index % 2 === 0 ? "left" : "right";
        experienceHTML += `
        <div class="container ${side}">
          <div class="content">
            <div class="tag">
              <h2>${exp.company}</h2>
            </div>
            <div class="desc">
              <h3>${exp.role}</h3>
              <p>${exp.duration}</p>
            </div>
          </div>
        </div>`;
    });
    experienceContainer.innerHTML = experienceHTML;
}

getExperience().then(data => {
    showExperience(data);
})
// fetch experience end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}