const passwordLength: number = 8;


function generateRandomPassword(length:number):string{

    const uppercase:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase:string = "abcdefghijklmnopqrstuvwxyz";
    const digits:string = "0123456789";
    const special:string = "!@#$%&";

    let allchars:string = uppercase + lowercase + digits +special

    let password:string = ""

    password += uppercase.charAt(Math.floor(Math.random()*uppercase.length))
    password += lowercase.charAt(Math.floor(Math.random()*lowercase.length))
    password += digits.charAt(Math.floor(Math.random()*digits.length))
    password += special.charAt(Math.floor(Math.random()*special.length))

    for (let i:number=4; i<length;i++){
        password += allchars.charAt(Math.floor(Math.random()*allchars.length))
    }
    
    return password
}
console.log(generateRandomPassword(passwordLength))

