
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++ ){
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(array){
  var newArray = [];
  var i = parseInt(0);
  while (i < array.length){
   newArray.push(array[i] + "!!!");
   i++;
  }
  return newArray;
}


function iLoveTheBeatles(number){
  var emptyString = [];
  do {
    var string = "I love the Beatles!";
    emptyString.push(string);
    number++;
  }while(number < 15)
  return emptyString;
}
 does the 0 count as the first one? 
 so if it's a counter then its returned emptyString?
 upto that point 
 i'm just trying to see the array as it itterates 
 

