

let arr = [3,2,5,6,7,1,4]

function bublesort(arr1){

    for(let i = arr1.length-1;i>0;i--){

        for(let j = 0;j<i;j++){
            if(arr1[j] > arr[j+1]){
                [arr1[j],arr1[j+1] ]= [arr1[j+1],arr1[j]]
            }
        }
    }
    return arr1
}

const res = bublesort(arr)
console.log(res)