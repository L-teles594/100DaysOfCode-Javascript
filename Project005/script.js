const btn = document.querySelector('.btn'),
  result = document.querySelector('.result')
 

btn.addEventListener('click', palindrome)

function palindrome() {
 // A partir dessa linha toda solução foi bolada por mim, resolvi antes de ver a solução  do professor.
 const word = document.querySelector('.input-text').value.toLowerCase()
 let reverseWord = ''

 for (i = word.length - 1; i >= 0; i--) 
  reverseWord += word[i].toLowerCase()
 
 word == reverseWord ? result.innerHTML = `${word.toUpperCase()} is a palindrome` : result.innerHTML = `${word.toUpperCase()} isn't a palindrome`

}



// Solução do Professor

// function palindrome() {
//   const word = document.querySelector('.input-text').value
//   let len = word.length

//   let start = word.substring(0, Math.floor(len / 2)).toLowerCase()
//   let end = word.substring(len - Math.floor(len / 2)).toLowerCase()

//   // let flip = end.split("").reverse().join("");

//   let flip = [...end].reverse().join('')
//   if (start == flip) {
//     result.innerHTML = `${word.toUpperCase()} is a palindrome`
//   } else {
//     result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
//   }
//   // alert(flip);
// }