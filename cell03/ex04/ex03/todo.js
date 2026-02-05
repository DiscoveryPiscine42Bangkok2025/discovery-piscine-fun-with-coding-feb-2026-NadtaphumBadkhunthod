$(document).ready(function() {
    const $list = $('#ft_list');

    const cookie = document.cookie.split('; ').find(row => row.startsWith('todos='));
    if (cookie) {
        const tasks = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        tasks.reverse().forEach(t => addTask(t, false));
    }

    $('#new_btn').click(function() {
        const task = prompt("New task:");
        if (task && task.trim()) addTask(task, true);
    });

    function addTask(text, save) {
        const $div = $('<div></div>').text(text).addClass('todo-item');
        
        $div.click(function() {
            if (confirm("Remove this task?")) {
                $(this).remove();
                saveToCookies();
            }
        });

        $list.prepend($div);
        if (save) saveToCookies();
    }

    function saveToCookies() {
        const tasks = [];
        $('.todo-item').each(function() {
            tasks.push($(this).text());
        });
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))}; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/`;
    }
});