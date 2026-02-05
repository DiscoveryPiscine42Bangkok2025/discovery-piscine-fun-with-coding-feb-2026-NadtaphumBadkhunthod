const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = function() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    
    if (todoCookie) {
        const jsonStr = decodeURIComponent(todoCookie.split('=')[1]);
        const todoArray = JSON.parse(jsonStr);
        todoArray.reverse().forEach(text => addToDo(text, false));
    }
};

newBtn.addEventListener('click', () => {
    const task = prompt("What do you need to do?");
    if (task && task.trim() !== "") {
        addToDo(task, true);
    }
});

function addToDo(text, save) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    div.addEventListener('click', () => {
        if (confirm("Do you really want to remove this TO DO?")) {
            div.remove();
            saveToCookies();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);

    if (save) {
        saveToCookies();
    }
}

function saveToCookies() {
    const todos = [];
    const items = ftList.querySelectorAll('.todo-item');
    
    items.forEach(item => todos.push(item.textContent));
    
    const jsonStr = JSON.stringify(todos);
    document.cookie = `todos=${encodeURIComponent(jsonStr)}; path=/`;
}