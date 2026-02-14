const form = document.getElementById('taskform');
const input = document.getElementById('taskinput');
const list = document.getElementById('tasklist');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if(!text) return;

    const li = document.createElement('li');
    li.className = 'taskitem';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'taskcheckbox';

    const span = document.createElement('span');
    span.className = 'tasktext';
    span.textContent = text;


    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deletebtn';
    deleteBtn.type = "button";

    const trash = document.createElement('img');
    trash.src = 'trash.png';
    trash.alt = 'delete';
    trash.className = 'trash';

    deleteBtn.appendChild(trash);

    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            span.style.textDecoration = 'line-through';
            span.style.opacity = '0.6';
        } else {
            span.style.textDecoration = 'none';
            span.style.opacity = '1';
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = '';
    input.focus();
});