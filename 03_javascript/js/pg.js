const container = document.getElementById('container');
const pg = document.getElementById('pg');

let x = 0; 
let y = 0; 

const img = document.createElement("img");
img.setAttribute("src","../images/boom.png");

document.addEventListener('keydown', function(event) {
  console.log(event.key);
  
  if (event.key === 'ArrowUp') {
    y -= 10; 
  } else if (event.key === 'ArrowDown') {
    y += 10; 
  } else if (event.key === 'ArrowLeft') {
    x -= 10; 
  } else if (event.key === 'ArrowRight') {
    x += 10; 
  } else if (event.key === 'x') {
    container.append(img);
  }

  pg.style.left = x + 'px';
  pg.style.top = y + 'px';

  
});


