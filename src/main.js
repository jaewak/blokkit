const addButton = document.getElementById('addWord')
const wordInput = document.getElementById('wordInput')

function addWord() {
    alert(wordInput.value.trim())
}

addButton.addEventListener('click', addWord)