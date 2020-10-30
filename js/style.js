$('.count').counterUp({
    delay: 10,
    time: 3000
})

// button commend 
mybutton = document.getElementById('mybtn');
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})