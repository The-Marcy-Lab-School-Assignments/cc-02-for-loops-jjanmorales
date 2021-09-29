//1
function countToTen(){
  for(let i = 0; i < 11; i++){
      console.log(i)
  }
}
// countToTen();


//2
function countFromOne(num){
  for(let i = 1; i <= num; i++){
      console.log(i)
  }
}
// countFromOne(18);


//3
function countEveryEven(num){
  for(let i = 1; i <= num; i++){
      if( i % 2 === 0){
          console.log(i)
      }
  }
}
// countEveryEven(48);

//4
function countEveryOdd(num){
  for(let i = 1; i <= num; i+=2){
      console.log(i)
  }
}
// countEveryOdd(19);

//5 
function countEvens(nums){
  let count = 0
  for(let i = 0; i < nums.length; i++){
    if( nums[i] % 2 === 0){
      count+=1
    }
  }
  return count
}
// console.log(countEvens([1,14,2,6,8]))
