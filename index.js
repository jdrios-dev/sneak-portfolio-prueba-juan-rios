import { data } from './mock.js';

const galleryContainer = document.getElementById('galleryContainer');
const gridStyle = document.getElementById('gridStyle');
const rowStyle = document.getElementById('rowStyle');

const dataAll = document.getElementsByClassName('dataAll');
const dataBrand = document.getElementsByClassName('dataBrand');
const dataWeb = document.getElementsByClassName('dataWeb');
const dataPhoto = document.getElementsByClassName('dataPhoto');
const dataMobile = document.getElementsByClassName('dataMobile');

let all = [];

function allPortfolio(category) {
  for(let i = 0; i < category.length - 1 ; i++){
    all.push(category[i])
  }
}

allPortfolio(data.brand)
allPortfolio(data.web)
allPortfolio(data.photo)
allPortfolio(data.mobile)

const displayItems = ((items) => {
  let itemsArray = '';
  items.forEach((item) => {
    itemsArray += `
      <div class="img__container">
        <img class="img__portfolio" src="./assets/${item.img}" alt="">
        <div class="overlay">
          <h2> ${item.title} </h2>
          <p>${item.description}</p>
        </div>
      </div>
    `
  });
  galleryContainer.innerHTML = itemsArray;
});

dataAll[0].addEventListener('click', function() { displayItems(all)}, false );
dataAll[1].addEventListener('click', function() { displayItems(all)}, false );
dataWeb[0].addEventListener('click', function() { displayItems(data.web)}, false );
dataWeb[1].addEventListener('click', function() { displayItems(data.web)}, false );
dataBrand[0].addEventListener('click', function() { displayItems(data.brand)}, false );
dataBrand[1].addEventListener('click', function() { displayItems(data.brand)}, false );
dataPhoto[0].addEventListener('click', function() { displayItems(data.photo)}, false );
dataPhoto[1].addEventListener('click', function() { displayItems(data.photo)}, false );
dataMobile[0].addEventListener('click', function() { displayItems(data.mobile)}, false );
dataMobile[1].addEventListener('click', function() { displayItems(data.mobile)}, false );

function addRowClass () {
  galleryContainer.classList.add('gallery__container--rows');
  galleryContainer.classList.remove('gallery__container');
}

function removeRowClass () {
  galleryContainer.classList.remove('gallery__container--rows');
  galleryContainer.classList.add('gallery__container');
}

gridStyle.addEventListener('click', function(){ removeRowClass() }, false)
rowStyle.addEventListener('click', function(){ addRowClass() }, false)

displayItems(all)