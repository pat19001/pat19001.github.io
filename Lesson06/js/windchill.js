/* f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 */
window.addEventListener('load', (event)=>{
  var temp = document.querySelector("#ht")
  var wspeed = document.querySelector("ws")
  var wchill = ((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wspeed, 0.16)))
  console.log(wchill)
})
