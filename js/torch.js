function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
//   document.getElementById("main-id").style.setProperty('--cursorX', x + 'px')
//   document.getElementById("main-id").style.setProperty('--cursorY', y + 'px')
// document.getElementById("check").style.setProperty('--cursorX', x + 'px')
//     document.getElementById("check").style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)