const word = document.querySelector('.input-text')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', countVowel)

function countVowel() {
  let count = 0
  let wordVal = word.value.toLowerCase()

  for (i = 0; i < wordVal.length; i++) {
    if (wordVal[i].match(/([a,e,i,o,u])/))
    count++
  }
  result.innerHTML = `${wordVal.toUpperCase()} has ${count} vowels`
}