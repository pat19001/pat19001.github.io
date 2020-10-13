function toggleMenu(){
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
}

window.addEventListener('load', (event)=>{
  const lu = document.querySelector('#lastupdated');
  lu.textContent = document.lastModified;

  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();
})