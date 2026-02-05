$(document).ready(function() {
    setInterval(() => alert('Please, use me...'), 30000);

    $('#submit').click(function() {
        const v1 = $('#left').val();
        const v2 = $('#right').val();
        const op = $('#operator').val();

        if (!/^\d+$/.test(v1) || !/^\d+$/.test(v2)) {
            alert('Error :(');
            return;
        }

        const n1 = parseInt(v1);
        const n2 = parseInt(v2);

        if ((op === '/' || op === '%') && n2 === 0) {
            console.log("It's over 9000!");
            alert("It's over 9000!");
            return;
        }

        let res = eval(`${n1} ${op} ${n2}`);
        console.log(res);
        alert(res);
    });
});