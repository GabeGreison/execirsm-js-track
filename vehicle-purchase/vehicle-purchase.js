
export function needsLicense(kind) {
    return kind === "car" || kind === "truck"
   }
   
   
   export function chooseVehicle(option1, option2) {
    
     let betterOption ='';
     const rest = ' is clearly the better choice.'
     
     if(option2 > option1){
      betterOption = option1 + rest
       
    } else{
      betterOption = option2 + rest
    }
     return betterOption
   }
   
   export function calculateResellPrice(originalPrice, age) {
     
     
     let finalValue = 0;
     
     if(age < 3){
       
       finalValue = originalPrice * 0.8
       
     } else if (age >= 3 && age <=10){
       
       finalValue = originalPrice * 0.7
     } else {
        
       finalValue = originalPrice * 0.5
   }
   
     return finalValue
   }
   