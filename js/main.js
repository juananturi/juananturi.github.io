(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

 // Obtener los elementos de radio buttons
 const cartonDobleRadio = document.getElementById('#carton_doble');
 const cartonSencilloRadio = document.getElementById('#carton_sencillo');

 // Función para deseleccionar las opciones después de un minuto
 function deseleccionarOpcion() {
     cartonDobleRadio.checked = false;
     cartonSencilloRadio.checked = false;
 }

 // Event listener para detectar cambios en las opciones
 cartonDobleRadio.addEventListener('change', () => {
     // Reiniciar el temporizador si se cambia la opción antes de que se cumpla el minuto
     clearTimeout(window.temporizador);
     // Establecer un nuevo temporizador para deseleccionar la opción después de un minuto
     window.temporizador = setTimeout(deseleccionarOpcion, 60000);
 });

 cartonSencilloRadio.addEventListener('change', () => {
     // Reiniciar el temporizador si se cambia la opción antes de que se cumpla el minuto
     clearTimeout(window.temporizador);
     // Establecer un nuevo temporizador para deseleccionar la opción después de un minuto
     window.temporizador = setTimeout(deseleccionarOpcion, 60000);
 });

