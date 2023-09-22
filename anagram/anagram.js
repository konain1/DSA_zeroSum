

let isAnagram = 'aparapa'

let j = isAnagram.length-1


for(let i = 0;i<isAnagram.length; i++){
    if(isAnagram[i] != isAnagram[j]){
         console.log('not anagram!');
         break;
    }

    if(i == j){
        break
    }

    j--;


    
}

if(j == Math.floor(isAnagram.length/2)){
    console.log('anagram')
}
