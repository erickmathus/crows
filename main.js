let rows = prompt('How many rows?')
let cols = prompt('How many columns?')
let grid = document.querySelector('#grid')

let i = 0
  while (i < parseInt(rows * cols)) {
  let div = document.createElement('div')
  if (1 % 2 == 0) {
    div.style.background = 'red'
  } else {
    div.style.background = 'black'
  }
  grid.appendChild(div)
  i += 1
}
grid.style.gridTemplate = 'repeat(${rows}, 50px) / repeat(${cols}, 50px)'
