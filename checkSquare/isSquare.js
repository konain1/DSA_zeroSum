

let check = []

function IsSquare(arr,arr2){

    for(let i =0;i<arr.length;i++){

        for(let j = 0;j<arr2.length;j++){

            if(arr[i] * arr[i] == arr2[j]){
                check[i] = true
                break;
            }else{
                check[i] = false
            }
        }
    }

   

}



IsSquare([1,2,3,4],[1,9,4,16])

for (const iterator of check) {

    if(iterator == false){
       console.log('false')
       break;
    }else{
        console.log('true')
    }
}