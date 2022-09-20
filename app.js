let openBtn = document.getElementById('open');
let close = document.getElementById('close');
const container = document.querySelector('.container');

// // open.addEventListener('click', () => container.classList.add('show-nav'));
// // close.addEventListener('click', () => container.classList.remove('show-nav'));
openBtn.addEventListener("click", function(){
 container.classList.add("show-nav")
})

close.addEventListener("click", function(){
    container.classList.remove("show-nav")
   })