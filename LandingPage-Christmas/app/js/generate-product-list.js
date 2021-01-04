import productsList from './data/products.js';
{
  /* <div class="accessory__content">
            <img
              src=""
              alt=""
              class="accessory__img"
            />
            <h3 class="accessory__title">Snow Globe</h3>
            <span class="accessory__category">Accessory</span>
            <span class="accessory__preci">$9.45</span>
            <a href="#" class="button accessory__button"
              ><i class="bx bx-heart"></i
            ></a>
          </div> */
}

const makeProductListMarkup = product => {
  const { nameProduct, price, urlImg } = product;

  return `
  <div class="accessory__content">
    <img src="${urlImg}" alt="" class="accessory__img"/>
    <h3 class="accessory__title">${nameProduct}</h3>
    <span class="accessory__category">Accessory</span>
    <span class="accessory__preci">$${price}</span>
    <a href="#" class="button accessory__button">
    <i class="bx bx-heart"></i></a>
  </div>
  `;
};

const productEl = document.querySelector('.accessory__container');
const productListMarkup = productsList.map(makeProductListMarkup).join('');

productEl.innerHTML += productListMarkup;
