
const arr = [1,2,3,4,5,6,7,8,9,10]

let maxSum = 0


for(let i = 0;i<arr.length;i++){
    let sum = 0
    for(j=i;j<i+4;j++){
      
        sum = sum + arr[j]

        
    }
    if(sum > maxSum){
        maxSum = sum
    }
}

console.log(maxSum)