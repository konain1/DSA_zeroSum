

const array = [ 7,2,1,5,3]


function insertion(arr){

    for(let i = 1;i<arr.length;i++){
        let j = i-1;
        let cur = arr[i]

        while(j>= 0 && cur < arr[j]){

            arr[j+1]= arr[j]
            arr[j] = cur
          
            j--
        } 
    }

    return arr

}

const res = insertion(array)

console.log(res)