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

  const b = document.querySelector("#banner");
  today = new Date().getDay();
  if(today==5){
    b.style.display = "block";
  }

})

