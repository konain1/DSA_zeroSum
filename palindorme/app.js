


function isPalindrome(str){

    let newStr = str.split("").reverse().join("")

    console.log(newStr)
    return str.toLowerCase() === newStr.toLowerCase()
}

let result  = isPalindrome('pop')
console.log(result)