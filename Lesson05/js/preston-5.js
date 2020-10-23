function toggleMenu(){
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
}

// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("expand");
// }


window.addEventListener('load', (event)=>{
    const cd = document.querySelector('#lastupdated');
    let day = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ]
    let month = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'Novemeber', 
        'December'
    ]
    cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();

  const b = document.querySelector("#banner");
  today = new Date().getDay();
  if(today==5){
    b.style.display = "block";
  }

})

