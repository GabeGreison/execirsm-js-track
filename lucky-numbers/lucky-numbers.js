
export function twoSum(array1, array2) {
    let firstArray = array1.join('')
    let secondArray = array2.join('')
    let firstNumber = Number(firstArray)
    let secondNumber = Number(secondArray)
    
    return firstNumber + secondNumber
    
  }
  
  
  export function luckyNumber(value) {
    
  let reverseValue = String(value).split('').reverse().join('');
  let normalValue = String(value);
    
  return normalValue == reverseValue
    
    
  }
  
  export function errorMessage(input) {
   String(input)
    if(!input){
      return 'Required field'
    } else if (!Number(input) || input === 0){
      return 'Must be a number besides 0'
    } else {
      return ""
    }
  }
  