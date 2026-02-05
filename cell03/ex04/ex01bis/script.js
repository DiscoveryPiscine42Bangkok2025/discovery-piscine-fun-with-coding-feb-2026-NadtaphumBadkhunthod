$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIdx = 0;
    const $balloon = $('#balloon');

    function update() {
        $balloon.css({
            width: size,
            height: size,
            backgroundColor: colors[colorIdx]
        });
    }

    $balloon.on('click', function() {
        size += 10;
        colorIdx = (colorIdx + 1) % colors.length;

        if (size > 420) {
            size = 200;
            colorIdx = 0;
        }
        update();
    });


    $balloon.on('mouseleave', function() {
        if (size > 200) {
            size -= 5;
            colorIdx = (colorIdx - 1 + colors.length) % colors.length;
            update();
        }
    });
});