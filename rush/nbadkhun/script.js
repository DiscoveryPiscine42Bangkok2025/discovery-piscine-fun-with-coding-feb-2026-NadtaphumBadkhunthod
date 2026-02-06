$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('#navbarNav').toggleClass('show');
    });

    $('.nav-link').click(function() {
        $('#navbarNav').removeClass('show');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

});