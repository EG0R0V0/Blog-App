// let post = { //создаем объект для вывода одного поста
//     title: '',
//     text: '',
// };
const posts = []; //создаем массив для создания нескольких постов
const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20; // Лимит вынесен в отдельную константу    



const titleInputNode = document.querySelector('.js-title-input');
const textInputtNode = document.querySelector('.js-text-input');
const publicBtnNode = document.querySelector('.js-public-btn'); //находим элемент по классу
const postNode = document.getElementById('js-post'); //находим элемент по id  в html
const validationMassage = document.getElementById('js-validationMassage');


publicBtnNode.addEventListener('click', function () {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);
    
    renderPosts();

    validation();
})

function validation() {
    const titleLen = titleInputNode.value.length;
    const textLen  = textInputtNode.value.length;


    console.log(titleLen, textLen);
}


function getPostFromUser() {     // получить данные из поля ввода
    const title = titleInputNode.value;
    const text = textInputtNode.value;

    return{
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
            <div class = 'post'>
                <p class = 'post__title'>${post.title}</p>
                <p class = 'post__text'>${post.text}</p>
            </div>    
    `
    });

    postNode.innerHTML = postsHTML;
}