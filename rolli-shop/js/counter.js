'use stric';

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-action')) {
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');

    if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;

      return;
    }

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});

