const addButton = document.querySelector('#add-block');
const deldButton = document.querySelector('#del-block');
const modButtons = document.querySelectorAll('.mod-button');
const displayArea = document.querySelector('#display-area');
const controlPanel = document.querySelector('#control-panel');
let styleString = "";
let divNo = 1;


addButton.addEventListener('click', ()=>{addBlocks();});
deldButton.addEventListener('click', ()=>{delBlocks();});
modButtons.forEach(addListenerToButton);

controlPanel.addEventListener("click",removeInfoMsg);


function removeInfoMsg() {
    displayArea.firstElementChild.remove();
    controlPanel.removeEventListener("click",removeInfoMsg);
}



function addBlocks() {
    const div = document.createElement("div");
    div.innerText = `( ${divNo} )`;
    divNo++;
    div.classList.add("blocks");
    displayArea.appendChild(div);
}

function delBlocks() {
    displayArea.lastElementChild.remove();
    if(divNo>1){
        divNo--;
    }
}
//!!!
function updateBlocksStyle(styleName) {
    displayArea.setAttribute('style',``);
}

function addListenerToButton(button){
    button.addEventListener('click', () => {
        // console.log(button.id);
        // console.log(button.dataset.key);
        styleString += `${button.dataset.key}:${button.id};`;
        displayArea.setAttribute('style',styleString);

    })
}