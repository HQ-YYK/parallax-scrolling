let starts = document.getElementById('starts')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let bth = document.getElementById('bth')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
  let value = window.scrollY
  starts.style.left = value * 0.25 + 'px'
  moon.style.top = value * 1.05 + 'px'
  mountains_behind.style.top = value * 0.5 + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 2.5 + "px"
  text.style.marginTop = value * 1.5 + "px"
  bth.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})