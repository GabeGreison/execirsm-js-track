
export function dayRate(ratePerHour) {
    return ratePerHour * 8
   ;
  }
  
  
  export function monthRate(ratePerHour, discount) {
    const fullRate = (ratePerHour * 8) * 22
    const totalDiscount = fullRate * discount
    return Math.ceil(fullRate - totalDiscount)
  }
  
  export function daysInBudget(budget, ratePerHour, discount) {
    const fullRate = ratePerHour * 8
    const totalDiscount = fullRate * discount
    const oneDay = (fullRate - totalDiscount)
    return Math.floor(budget / oneDay)
  }
  