function addElementToBeginningOfArray (array,newItem) {
  var newArray = array.unshift(newItem);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,newItem) {
  array = array.unshift(newItem);
  return array;
}
