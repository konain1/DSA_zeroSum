
const user = [
    {email:'ksdfsd@gamil.com',
    username:"uzumaki"},
    {email:'abc@gmail.com',
username:'abc'}
]

function exists(user,val){

    for (const key of user) {
        if(key.username.includes(val)){
            return true
        }
    }

    return false;
}


const res  =exists(user,'abc')

console.log(res)