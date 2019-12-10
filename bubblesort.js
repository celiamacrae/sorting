function bubbleSort(arr){

  let swapCounter = 0;

  for(let i=0; i< arr.length -1; i++){
    compare(arr[i], arr[i+1])

  }

  if(swapCounter ===0 ){
    return arr
  }else{
    bubbleSort(arr)
  }


  function compare(a, b) {
    if(b < a){
      swapCounter ++;
      swap(a, b, arr)
    }
  }

  return arr
}

function swap(a, b, arr){
  let indexA = arr.indexOf(a)
  let indexB = arr.indexOf(b)

  arr[indexA] = b
  arr[indexB] = a
}




// let a = arr[0]
//   let b = arr[1]
//   console.log("ARR", arr)
//   console.log(swap(a, b, arr))
//   console.log(arr)




