const text: string = "s@atur!day";

const special:string[] = ['!','@','#','$','%','&'];

let newStr:string[]= text.split("")

let updatedStr:string[]= []

for (let i=0; i<newStr.length;i++){
    if (!special.includes(newStr[i])){
        updatedStr.push(newStr[i])
    }

}

console.log(updatedStr.join(""))