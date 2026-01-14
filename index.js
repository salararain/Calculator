let input = document.getElementById('input'); 

let buttons = document.querySelectorAll('button');

let string = "";

let operators = ['+', '-', '*', '/'];

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML;

        
        if (value === '=') {
            if (string === "") return;
            string = eval(string);
            input.value = string;
        }

        else if (value === 'AC') {
            string = "";
            input.value = string;
        }

         
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        
        else {

        
            if (operators.includes(value)) {

                
                if (string === "") return;

                if (operators.includes(string.slice(-1))) {
                    string = string.slice(0, -1);
                }
            }

            string += value;
            input.value = string;
        }
    });
});

document.addEventListener('keydown', (e) => {

    let numbers = ['0','1','2','3','4','5','6','7','8','9','.'];

    if (numbers.includes(e.key)) {
        string += e.key;
        input.value = string;
    }

    else if (operators.includes(e.key)) {

        if (string === "") return;

        if (operators.includes(string.slice(-1))) {
            string = string.slice(0, -1);
        }

        string += e.key;
        input.value = string;
    }

    else if (e.key === 'Enter') {
        if (string === "") return;
        string = eval(string);
        input.value = string;
    }

    else if (e.key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if (e.key === 'Delete') {
        string = "";
        input.value = string;
    }
});
