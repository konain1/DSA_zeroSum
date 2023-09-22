

let anagramArr = []
function isAragram(str1,str2){

    if(!str1.length === str2.length){
        console.log('length are not same')
        return false;
    }

    for (const items of str1) {
        console.log(items)
        anagramArr[items] = (anagramArr[items] || 0)+1
    }

    for (const index of str2) {
        
        if(!str1[index]) {
            console.log('not found at str2')
            return false
        }
        anagramArr[index] -=1
    }

    return true
}
const resutl = isAragram('heello','heello')
console.log(resutl)
