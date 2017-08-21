function addElementToBeginningOfArray (array,element) {
  var newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element) {
  var newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array = array.push(element);
  return array;
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
}
