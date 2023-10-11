const addButton = document.querySelector('#add-block');
const deldButton = document.querySelector('#del-block');
const modButtons = document.querySelectorAll('.mod-button')
const displayArea = document.querySelector('#display-area');


addButton.addEventListener('click', ()=>{addBlocks();});
deldButton.addEventListener('click', ()=>{delBlocks();});
modButtons.forEach(addListenerToButton);



function addBlocks() {
    const div = document.createElement("div");
    div.innerText = "(^-^)";
    div.classList.add("blocks");
    displayArea.appendChild(div);
}

function delBlocks() {
    displayArea.lastElementChild.remove();
}
//!!!
function updateBlocksStyle(styleName) {
    displayArea.setAttribute('style',``);
}

function addListenerToButton(button){
    button.addEventListener('click', () => {
        console.log(button.id);
        console.log(button.dataset.key);
        displayArea.setAttribute('style',`${button.dataset.key}:${button.id};`);

    })
}