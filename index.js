const titleInputNode = document.querySelector('.js-title-input');
const  publicBtnNode= document.querySelector('.js-public-btn');
let inputTitle = '';

publicBtnNode.addEventListener('click', function () {
    inputTitle = titleInputNode.value;
    
    console.log(inputTitle)
})

console.log(1);