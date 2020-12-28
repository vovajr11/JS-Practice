const cardWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card');

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    const itemCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemCard) {
      const counterElement = itemCard.querySelector('[data-counter]');

      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      return;
    }

    const cardItemHTML = `
    <div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="" />
            </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

        <div class="cart-item__details">
          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productInfo.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>
        </div>

      </div>
    </div>
  </div>`;

    cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);

    // Updates counter the quantity of goods
    card.querySelector('[data-counter]').innerText = '1';
  }
});

function toggleCartStatus() {
  const cartEmpty = document.querySelector('[data-cart-empty]');
  const cartTotal = document.querySelector('.cart-total');
  const orderForm = document.querySelector('#order-form');

  if (cardWrapper.querySelectorAll('.cart-item').length > 0) {
    cartEmpty.classList.add('none');
    cartTotal.classList.remove('none');
    orderForm.classList.remove('none');
  }
}

toggleCartStatus();
