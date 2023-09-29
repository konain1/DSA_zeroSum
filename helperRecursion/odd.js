

const array = [1,2,3,4,5,6,7]

let result = []

function oddd(arr){

    function hp(x){

        if(x.length === 0 ){
            return
        }

        if(x[0] %2 !== 0 ){
            result.push(x[0])
        }
        hp(x.slice(1))

    }

    hp(arr)

    return result
}

const res = oddd(array)

console.log(res)