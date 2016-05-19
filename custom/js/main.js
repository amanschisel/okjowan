/**
 * Main JS file.
 *
 * @copyright
 *  nobody :)
 */
$(document).ready(function() {
    console.log("Hello Melissa.")

    // Hide the questions, but not the first.
    $('.questions:not(:first-child)').hide();

    // Default the Prev button.
    $('#previous').attr('disabled', 'disabled');

    // Add the navigation.
    var i = 0; // couter
    var x = $('.questions').length - 1 ; // Questions
    $('#next').on('click', function (e) {
        if (i < x) {
            i++;
            $('.questions').hide();
            $('.questions:eq('+i+')').show();
            $('#previous').removeAttr('disabled');
            if (i == x) {
                $('#next').attr('disabled', 'disabled');
            }
        }
    });
    $('#previous').on('click', function (e) {
        if (i > 0) {
            i--;
            $('.questions').hide();
            $('.questions:eq('+i+')').show();
            $('#next').removeAttr('disabled');
            if (i == 0) {
                $('#previous').attr('disabled', 'disabled');
            }
        }
    });
});