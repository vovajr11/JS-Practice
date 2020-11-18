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
// const btnPlus = document.querySelector('[data-action="plus"]');
// console.log(btnPlus);
// const btnMinus = document.querySelector('[data-action="minus"]');
// console.log(btnMinus);

// btnPlus.addEventListener('click', function (event) {
//   // console.log('click P');
//   const counterWrapper = event.target.closest('.counter-wrapper');

//   const counter = counterWrapper.querySelector('[data-counter]');
//   //   console.log(counter);
//   counter.innerText = ++counter.innerText;
// });

// btnMinus.addEventListener('click', function (event) {
//   const counterWrapper = event.target.closest('.counter-wrapper');

//   const counter = counterWrapper.querySelector('[data-counter]');
//   //   console.log(counter);
//   if (parseInt(counter.innerText) > 1) {
//     counter.innerText = --counter.innerText;
//   }
// });
