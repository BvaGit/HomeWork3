import '../scss/style.scss';
import { requstPOST, requestGET, requestDelete} from './request';


const btnAdd = document.querySelector('.btnAdd');
const cancel = document.getElementById('cancel');
const cards = document.querySelector('.cards');
const send = document.getElementById('send');
const form = document.getElementById('formElement');
const modal = document.querySelector(".modal");

const url = "http://localhost:3000/api/";

function render(arr){
    cards.innerHTML="";
    arr.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card__delete" data-id="${item.id}"></div>
        <div class="card__img">
        <img src="${item.img}" alt="">
        </div>
        <h2 class="card__title">${item.title}</h2>
        <div class="card__line"></div>
        <p class="card__descr">${item.descript}</p>
        <p class="card__date">${item.dateauth}</p>
        `
        cards.append(div);
    })
}



function addData(data){
    requstPOST(url + "upload", data)
    .then(() => {
        getBooks();
    })
}

function getBooks(){
    requestGET(url + "get")
    .then(data => data.json())
    .then(data => render(data));
}

function hide(){
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function show(){
    modal.classList.add('show');
    modal.classList.remove('hide');
}

getBooks();


send.addEventListener("click", () => addData(form));

btnAdd.addEventListener("click", show);
cancel.addEventListener("click", hide);

cards.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    requestDelete(url + "delete/" + id)
    .then(() => {
        getBooks();
    });
})
