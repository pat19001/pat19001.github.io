window.addEventListener('load', (event)=>{
  const lu = document.querySelector('#compiled');
  lu.textContent = document.lastModified.toString().replaceAll("/",".");
  // getMonth() + "." + getDay() + "." + getFullYear();
})