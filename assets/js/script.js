
$(document).ready(function(){

    $(window).on('load', function() {
        $('.preloader_area').fadeOut(1000)
    });

    $('.back_to_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('.navbar').addClass('Color04')
            $('.back_to_top').fadeIn(500)
        }
        
        else{
            $('.navbar').removeClass('Color04')
            $('.back_to_top').fadeOut(500)
        }
    });

    $('.hero_btn').click(function() {
        alert('⚡Do not do this or you will be severely punished')
    });

    $('.contact_btn .btn').click(function() {
        alert('Thank you for contact 📞 with us. We are always be with you 🧑‍🤝‍🧑')
    });
});

// VENOBOX PLUGIN

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


