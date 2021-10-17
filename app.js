function rot13(str) {
    let letterPairs = {
       A: 'N', B: 'O', C: 'P',
       D: 'Q', E: 'R', F: 'S',
       G: 'T', H: 'U', I: 'V',
       J: 'W', K: 'X', L: 'Y',
       M: 'Z', N: 'A', O: 'B',
       P: 'C', Q: 'D', R: 'E',
       S: 'F', T: 'G', U: 'H',
       V: 'I', W: 'J', X: 'K',
       Y: 'L', Z: 'M'    
     }
    let decipheredString = '';
    var firstLevel = str.split(" ")
    var newArr = []
    
    for(let i in firstLevel){
      var x = [...firstLevel[i]]
      newArr.push(x)

    }
     for(let i = 0 ; i < newArr.length; i++){
       for (let j = 0; j < newArr[i].length; j++){
         decipheredString += letterPairs[newArr[i][j]];
       }
       decipheredString += " "
     }
    
    console.log(decipheredString)
    
    }
rot13("TVGUHO");


