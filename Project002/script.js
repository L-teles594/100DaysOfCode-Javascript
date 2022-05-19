const count = document.querySelector('.count')
const generate = document.querySelector('.generator')

generate.addEventListener('click', () => {
  count.innerHTML = Math.floor(Math.random() * 100 + 1)
})
