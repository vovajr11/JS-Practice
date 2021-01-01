const mySiema = new Siema({
  perPage: 2,
  loop: true,
});
document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());
