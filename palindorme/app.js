


// function isPalindrome(str){

//     let newStr = str.split("").reverse().join("")

//     console.log(newStr)
//     return str.toLowerCase() === newStr.toLowerCase()
// }

// let result  = isPalindrome('pop')
// console.log(result)


function isPalindrome(str){

    let left = 0;
    let right = str.length -1

    while(left < right){
        if(str[left].toLowerCase() !== str[right].toLowerCase()){
            return false
        }
        left++;
        right--;
    }

    return true

}

const res = isPalindrome('Levep')
console.log(res)