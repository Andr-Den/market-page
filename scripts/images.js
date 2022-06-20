for (let i = 1; i < 6; i++) {
  let image = document.getElementById(`small-image${i}`)
  let bigImage = document.getElementById("big-image")
  
  image.addEventListener('click', () => {
    bigImage.style.backgroundImage = `url(${image.src})`
  });  
  }