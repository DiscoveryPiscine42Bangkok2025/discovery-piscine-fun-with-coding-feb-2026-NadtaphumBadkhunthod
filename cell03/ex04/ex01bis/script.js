$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIdx = 0;
    const $balloon = $('#balloon');

    function update() {
        $balloon.css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[colorIdx]
        });
    }

    $balloon.click(function() {
        size += 10;
        colorIdx = (colorIdx + 1) % 3;
        if (size > 420) {
            size = 200;
            colorIdx = 0;
        }
        update();
    });

    $balloon.mouseleave(function() {
        if (size > 200) size -= 5;
        colorIdx = (colorIdx - 1 + 3) % 3;
        update();
    });
});