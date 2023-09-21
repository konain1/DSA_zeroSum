

const arr = [-5,-3,-2,0,2,4,6,8]


let  i = 0;
let j = arr.length-1;
let  result = []


while(i<j){

    if(arr[i] + arr[j] == 0){
        result[0] = i;
        result[1] = j
        console.log('--')
        break;
    }else if(arr[i] + arr[j] > 0){
        j--;
    }else {
        i++
    }
    
}


console.log(result)