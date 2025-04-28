// let post = { //создаем объект для вывода одного поста
//     title: '',
//     text: '',
// };
const posts = []; //создаем массив для создания нескольких постов
<<<<<<< HEAD
const TITLE_VALIDATION_LIMIT = 20;
=======
const TITLE_VALIDATION_LIMIT = 15;
>>>>>>> 22642f75b281579ab27e7aede1deb8cbaa1a735f
const TEXT_VALIDATION_LIMIT = 50; // Лимит вынесен в отдельную константу    



const titleInputNode = document.querySelector('.js-title-input');
const textInputNode = document.querySelector('.js-text-input');
const publicBtnNode = document.querySelector('.js-public-btn'); //находим элемент по классу
const postNode = document.getElementById('js-post'); //находим элемент по id  в html
const validationMassage = document.getElementById('js-validationMassage');



publicBtnNode.addEventListener('click', function () {
    const titleLen = titleInputNode.value.length;
    const textLen  = textInputNode.value.length;

    if (titleLen <= TITLE_VALIDATION_LIMIT && textLen <= TEXT_VALIDATION_LIMIT) { //если количество символов пользователя в ТЕКСТЕ превыщает установленный лимит, выводится сообщение о перероверке 
        
        const postFromUser = getPostFromUser();

        addPost(postFromUser);
        
        renderPosts();

        validation();

        resetFields();
    } else{
        validationMassage.innerHTML = `            
            <div class = 'validationMassage'>
                <p class = 'quantity_check_massage'>Проверьте количество символов в заголовке или тексте :)</p>
            </div>` 
    }
    
    
})


titleInputNode.addEventListener("input", validation); //запись позволяет не прописывать полностью функцию, а написать просто validation
    
function validation() {
    const titleLen = titleInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {

        validationMassage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validationMassage.classList.remove("validationMassage_hidden");
        return;
    }

    validationMassage.classList.add("validationMassage_hidden");
}
   

textInputNode.addEventListener("input", function () { // при изменении поля ввода текста 
    const textLen  = textInputNode.value.length; 

    validationMassage.classList.remove("validationMassage_hidden");
    validationMassage.innerText =("До лимита в тексте осталось: " + (TEXT_VALIDATION_LIMIT - parseInt(textLen)) + " символов"); // считает сколько осталось символов
    
    
    if (textLen > TEXT_VALIDATION_LIMIT) {
        validationMassage.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT}       символов, сократите текст!`;
        validationMassage.classList.remove("validationMassage_hidden")
        return;
    }
    
});


function getPostFromUser() {     // получить данные из поля ввода
    const title = titleInputNode.value;
    const text = textInputNode.value;
    const date = new Date();
    const dt = `${date.getHours()}:${date.getMinutes()}`;

    return{
        date: dt,
        title: title, //синтаксис позволяет псать title, если назваение переменной совпадает с ее значением
        text: text
    };
}
    

// function setPost(newPost) {    // сохранить пост
//     post = newPost;
// }

function addPost(post) { //или { title, text}
    posts.push(post); 
}

function getPosts() {
    return posts;      // если в js нужно получить какие-либо данные мы делаем это через функцию, а не напрямую
}

function renderPosts() {     // отобразить пост
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML +=`        
            <div id = 'js-post' class = 'new__post'>
                <p class = 'post__dt'> Выложено в ${post.date}</p>
                <p class = 'post__title'>${post.title}</p>
                <p class = 'post__text'>${post.text}</p>
            </div>    
    `
    });

    postNode.innerHTML = postsHTML;
}
<<<<<<< HEAD

function resetFields() {  //функция обенуляет поля ввода, присваивая значение "пустая строка"
    titleInputNode.value = "";

    textInputNode.value = "";
}
=======
>>>>>>> 22642f75b281579ab27e7aede1deb8cbaa1a735f
