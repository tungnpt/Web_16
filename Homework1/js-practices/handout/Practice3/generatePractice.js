'use strict'

function generate(testLengthArray){

  var arrResult = [];
    var lengthItemArr,target,searchResult;
    //length array
    for(var i = 0; i < testLengthArray.length;i++){
      lengthItemArr = testLengthArray[i];
      var arrInput = [];
      //input array
      for(var j = 0; j < lengthItemArr;j++){
        arrInput.push(Math.floor(Math.random()*(10000 - 1) + 1));
      }
      //sort ascending
      arrInput.sort((a, b) => a - b);
      //target
      target = Math.floor(Math.random()*(10000-1) + 1);

      if(arrInput.length >= 4){
        if(i == 0){
          target = arrInput[0];
        }
        if(i == arrInput.length - 1){
          target = arrInput[arrInput.length - 1];
        }
        // if(i > 0 && i < arrInput.length - 1){
        //   target = Math.floor(Math.random()*(10000-1) + 1);
        // }
      }
      //output
      searchResult = arrInput.indexOf(target);

      var anotherObject = {"input": arrInput,"target": target,"output": searchResult};
      arrResult.push(anotherObject);
    }
    return arrResult;

  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm

}

module.exports = generate
