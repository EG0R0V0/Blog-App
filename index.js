let post = { //создаем объект 
    title: '',
    text: '',
};

const titleInputNode = document.querySelector('.js-title-input');
const textInputtNode = document.querySelector('.js-text-input');
const publicBtnNode = document.querySelector('.js-public-btn'); //находим элемент по классу
const postNode = document.getElementById('js-post'); //находим элемент по id  в html



publicBtnNode.addEventListener('click', function () {
    const postFromUser = getPostFromUser();
    setPost(postFromUser);
    renderPost();
})

function getPostFromUser() {     // получить данные из поля ввода
    const title = titleInputNode.value;
    const text = textInputtNode.value;
    
    return{
        title: title, //синтаксис позволяет псать title, если назваение переменной совпадает с ее значением
        text: text
    };
}

function setPost(newPost) {    // сохранить пост
    post = newPost;
}

function getPost() {
    return post; // если в js нужно получить какие-либо данные мы делаем это через функцию, а не напрямую
}

function renderPost() {     // отобразить пост
    const post = getPost();

    const postHTML =`
        <div class = 'post'>
            <p class = 'post__title'>${post.title}</p>
            <p class = 'post__text'>${post.text}</p>
        </div>    
    `;

    postNode.innerHTML = postHTML;
}