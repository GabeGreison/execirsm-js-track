export function cookingStatus(remainingTime){
    if(remainingTime === 0){
      return 'Lasagna is done.'
    } else if(remainingTime > 0){
      return 'Not done, please wait.'
    } else {
      return 'You forgot to set the timer.'
    }
  }
  
  export function preparationTime (layers,timePerLayer){
    let defaultMinutes = 2;
    
    if(!timePerLayer){
      return layers.length * defaultMinutes
    } else {
      return layers.length * timePerLayer
    }
  }
  
  export function quantities(layers){
      let obj = { noodles: 0, sauce: 0 };
    layers.forEach(function(i) {
      if(i === 'noodles') obj.noodles += 50;
      else if(i === 'sauce') obj.sauce += 0.2;
    });
    return obj;
  }
  
  export function addSecretIngredient(friendList,myList){
    myList.push(friendList[friendList.length -1]);
  }
  
  export function scaleRecipe(recipe,portions){
     let scaled = {}
  
    for (let property in recipe) {
      scaled[property] = recipe[property] * portions / 2
    }
    return scaled
  }
    