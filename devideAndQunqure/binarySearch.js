

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let x = 4

function devideAndQuenqure(arr,x){

    let i =0
    let  j = arr.length-1

    while(i<=j){
        let mid = (i+j) /2;

        if(arr[mid] === x){
            return mid
        }else if(arr[mid] > x){
            j = mid -1;
        }else{
            i = mid +1;
        }
    }

    return -1;
}

const result = devideAndQuenqure(arr,x)

console.log(result)