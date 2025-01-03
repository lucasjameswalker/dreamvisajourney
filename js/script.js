/*================
Template Name: Angela
Description: Immigration Aim Landing Page Template
Version: 1.0
Author: Author: https://www.templatemonster.com/authors/techeshta
=======================*/


// Table Of Content

// 01. Wow js
// 02. Form Submitting 
// 03. Testimonial Slider 
// 04. Faq's
// 05. Counter
// 06. Popup

/* -----------------------------------------------------
    01. Wow js
----------------------------------------------------- */
new WOW().init();


/* -----------------------------------------------------
    02. Form Submitting 
----------------------------------------------------- */

var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
    event.preventDefault();

    var status = document.getElementById("contact-form-status");

    var data = new FormData(event.target);

    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
        }
        })
    }
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
    form.addEventListener("submit", handleSubmit)
}



/* -----------------------------------------------------
    03. Testimonial Slider 
----------------------------------------------------- */

$(".testimonial-wrapper").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

/* -----------------------------------------------------
    04. Faq's
----------------------------------------------------- */

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});


/* -----------------------------------------------------
    05. Counter
----------------------------------------------------- */
let count = document.querySelectorAll(".count")
let arr = Array.from(count)

    arr.map(function(item){
    let startnumber = 0

    function counterup(){
    startnumber++
    item.innerHTML= startnumber
    
    if(startnumber == item.dataset.number){
        clearInterval(stop)
    }
    }

    let stop =setInterval(function(){
    counterup()
    },40)

});

/* -----------------------------------------------------
    06. Popup video
----------------------------------------------------- */
$(document).ready(function() {
    if ($.fn.magnificPopup) {
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
            patterns: {
                youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
            }
        });
        }
    });
