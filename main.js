//function takes an array of letters/words and assigns index # for each
var number=function(array){
    array = array.splice('')
    let newArr = []
    for (let i = 1; i <= array.length; i++) {
      newArr.push(`${i}: ${array[i-1]}`)
    }
    return newArr
    
    
  }

console.log(number(['a','b','c'])) // => [ '1: a', '2: b', '3: c' ]
console.log(number(['hey','there','friend`'])) // => [ '1: hey', '2: there', '3: friend' ]