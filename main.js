const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


let createToDo = () => {
    if (!input.value.trim()) return alert('напиши что нибудь!')
    let div = document.createElement('div')
    let text = document.createElement('h3')
    let edit = document.createElement('button')
    let delete_button = document.createElement('button')
    

    edit.setAttribute('class', 'edit_button')
    delete_button.setAttribute('class', 'delete_button')



    div.setAttribute('class', 'block_text')
    text.innerHTML = input.value;

    div.append(text)
    todoList.append(div)
    div.append(edit)
    div.append(delete_button)


    delete_button.addEventListener('click', () => {
        div.remove()
    })
    
    edit.addEventListener('click', () => {
       let newText = prompt('add new text', text.innerHTML) 

       if (newText !== null && newText.trim() !== "") {
        text.innerHTML = newText; 
    }
    })



    input.value = '';
}

createButton.addEventListener('click', createToDo)


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') createToDo();
})


