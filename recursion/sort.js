

const array = [2,4,0,1]

let mylist = []
let i = 0 ;
let j = 1;

function isSort(arr){

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }

    return true
}

function rec(arr){

    if(isSort(arr)){
        mylist = arr
        return
    }else if(arr[i] < arr[j]){
        i++;
        j++;
        rec(arr)
    }else{
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i=0;
        j=1;

        rec(arr)

    }
}

rec(array)
console.log(mylist)