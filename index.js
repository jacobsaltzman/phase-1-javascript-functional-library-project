const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

// function alertFunc(item){
//   console.log(item)
// }

function myEach(collection, callback){
  console.log(Array.isArray(collection))
  if(Array.isArray(collection)){
    for(let i =0; i < collection.length; i++){
      callback(collection[i])
    }
  }

  else{
    const newArray = Object.values(collection)
    for(let i =0; i < newArray.length; i++){
      callback(newArray[i])
  }
}
return collection
}
// myEach(unmodifiedTestArr, alertFunc)
// myEach(unmodifiedTestObj, alertFunc)


// function timesThree(num){
//   return (num*3)

// }

function myMap(collection, callback){
  // let newArray = [];
  if(Array.isArray(collection)){
    const newArray = []
    for(let i =0; i < collection.length; i++){
      newArray.push(callback(collection[i]))
    }
    // console.log(newArray)
    return newArray
  }
  else{
    let oldArray = [...Object.values(collection)]
    const newArray =[]
    for(let i =0; i < oldArray.length; i++){
      newArray.push(callback(oldArray[i]))
      // console.log(newArray)
  }
  return newArray

}

}
// myMap(unmodifiedTestArr, timesThree)
// myMap(unmodifiedTestObj, timesThree)



function myReduce(collection, callback, acc){
  if(Array.isArray(collection)){
    if (!acc) {
      acc = collection[0];
      collection = collection.slice(1);
    }
    
    const len = collection.length;
    
    for (let i = 0; i < len; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
  else{
    let newArray = [...Object.values(collection)]
    if (!acc) {
      acc = newArray[0];
      newArray = newArray.slice(1);
    }
    
    const len = newArray.length;
    
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newArray[i], newArray);
    }
    return acc;
  }
 }


function myFind(collection, predicate){
  if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
      if(predicate(collection[i])){
        return collection[i]
      }
      // return undefined
    }
  }
  else{
    let newArray = [...Object.values(collection)]
      for(let i = 0;i < newArray.length; i++){
        if(predicate(newArray[i])){
          return newArray[i]
        }
        // return undefined
    }
  }
}

function myFilter(collection, predicate){
  let newArray = []
  if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
      if(predicate(collection[i])){
        newArray.push(collection[i])
      }
    }
      return newArray

  }
  else{
    let newArray = [...Object.values(collection)]
    let filterArray = []
      for(let i = 0;i < newArray.length; i++){
        if(predicate(newArray[i])){
          filterArray.push(newArray[i])
        }
    }
        return filterArray

  }
}


function mySize(collection){
  if(Array.isArray(collection)){
    return collection.length;
  }
  else{
    let newArray = [...Object.values(collection)]
    return newArray.length
  }
}


function myFirst(arr, int){
  let newArr = []
  if (!int){
    return arr[0]
  }
  else{
    for(let i = 0; i < int; i++){
      newArr.push(arr[i])
    }
     return newArr
  }
}

function myLast(arr, int){
  if (!int){
    return arr[arr.length-1]
  }
  else{
      return arr.slice(- int)
      
  }
}

// console.log(myLast([5, 4, 3, 2, 1], 3))

function myKeys(obj){
  let newArray = [...Object.keys(obj)]
  return newArray
}

function myValues(obj){
  let newArray = [...Object.values(obj)]
  return newArray
}