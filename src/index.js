
exports.min = min
exports.max = max
exports.avg = avg

function min(arr){
  if (arr == undefined || arr.length == 0) {
    return 0
  }
  let min = arr[0]
  arr.forEach(el => {
    if (el < min) min = el
  })
  return min
}
function max(arr){
  if (arr == undefined || arr.length == 0) {
    return 0
  }
  let max = arr[0]
  arr.forEach(el => {
    if (el > max) max = el
  })
  return max
}
function avg(arr){
  if (arr == undefined || arr.length == 0) {
    return 0
  }
  let avg = 0
  arr.forEach(el => {
    avg += el
  })
  return avg/arr.length
}
