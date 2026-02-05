const leftInput = document.getElementById('left');
const rightInput = document.getElementById('right');
const opSelect = document.getElementById('operator');
const btn = document.getElementById('submit');

setInterval(() => {
    alert('Please, use me...');
}, 30000);

btn.addEventListener('click', () => {
    const leftVal = leftInput.value.trim();
    const rightVal = rightInput.value.trim();
    
    // 1. Validation: Must be non-empty and positive integers
    // Using regex to ensure it's digits only (no decimals or minus signs)
    if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftVal, 10);
    const right = parseInt(rightVal, 10);
    const op = opSelect.value;

    // 2. Division/Modulo by Zero check
    if ((op === '/' || op === '%') && right === 0) {
        const msg = "It's over 9000!";
        console.log(msg);
        alert(msg);
        return;
    }

    // 3. Calculation logic
    let result;
    switch (op) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '*': result = left * right; break;
        case '/': result = left / right; break;
        case '%': result = left % right; break;
    }

    // 4. Output
    console.log(result);
    alert(result);
});