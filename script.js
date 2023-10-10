const addButton = document.querySelector('#add-block');
const deldButton = document.querySelector('#del-block');
const displayArea = document.querySelector('#display-area');


addButton.addEventListener('click', ()=>{addBlocks();});

function addBlocks() {
    const div = document.createElement("div");
    div.innerText = "(^-^)";
    div.classList.add("blocks");
    displayArea.appendChild(div);
}

deldButton.addEventListener('click', ()=>{delBlocks();});

function delBlocks() {
    displayArea.lastElementChild.remove();
}

function updateBlocksStyle(styleName) {
    displayArea.classList.remove();
    displayArea.classList.add(styleName);
}