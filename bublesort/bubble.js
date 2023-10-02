

let arr = [6,1,2,3,4,5,]

function bublesort(arr1){
    let isSwapped;
    for(let i = arr1.length-1;i>0;i--){
        
        for(let j = 0;j<i;j++){
            if(arr1[j] > arr[j+1]){
                [arr1[j],arr1[j+1] ]= [arr1[j+1],arr1[j]]
                isSwapped = true
            }
        }
        if(!isSwapped){
            console.log(i)
            break;
        }
    }
    return arr1
}

const res = bublesort(arr)
console.log(res)