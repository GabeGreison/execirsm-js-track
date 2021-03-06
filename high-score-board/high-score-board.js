
export function createScoreBoard() {
    const scores = {
      "The Best Ever" : 1000000,
    };
     return scores
   }
   
   
   export function addPlayer(scoreBoard, player, score) {
     scoreBoard[player] = score;
   
     return scoreBoard
   }
   
   
   export function removePlayer(scoreBoard, player) {
     delete scoreBoard[player];
     return scoreBoard
   }
   
   
   export function updateScore(scoreBoard, player, points) {
     
     scoreBoard[player] += points;
   
     return scoreBoard
   }
   
   
   export function applyMondayBonus(scoreBoard) {
     for (let key in scoreBoard) {
     scoreBoard[key] += 100;
   }
     return scoreBoard
   }
   
   
   
   export function normalizeScore(params) {
     let normalizedScore = params.normalizeFunction(params.score)
     return normalizedScore
   }