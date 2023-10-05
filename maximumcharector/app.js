



function maxivalue(str){

let map = {}

str.split("").forEach(element => {
    

    map[element] = map[element]?map[element]+1:1;


});
let max = 1;
let maxi = str[0]

for(let k in map){
    if(map[k] > max){
        max = map[k]
        maxi = k
    }
}

return max

}
const res = maxivalue('hello world')
console.log(res )