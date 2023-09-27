

function optimize(arr,arr2){

    let map = {}
    let map2={}

    for (const iterator of arr) {
        
        map[iterator] = (map[iterator] || 0)+1
    }

    for (const iterator of arr2) {
        
        map2[iterator] = (map2[iterator] || 0)+1
    }

    // map comparing squares values from map2
    for (const key in map) {
        if(!map2[key*key]){
            return false
        }

        // comparing index values map  and map2
        if(map[key] !== map2[key*key]){
            return false
        }
    }
  

    return true
}

const resutl = optimize([1,2,2,4],[1,4,16,30])

console.log(resutl)