// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('')

}

const alsoReverse = (str) => {
  str = str.split('')
  let newStr = []
  for(let i=0; i<str.length; i++){
    newStr.unshift(str[i])
  }
  return newStr.join('')
}

const red = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '')
}



module.exports = red;
