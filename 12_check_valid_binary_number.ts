const prompt: string = require("prompt-sync")();

let input: string = prompt("Enter valid binary number: ");

input = input.replaceAll('"', "").replaceAll("'", "");

let chars:string[]= input.split("")

let isBinary:boolean =true;

for (let i:number=0; i<chars.length; i++){

   let digit:number = Number(chars[i])

   if (digit !==0 && digit !==1){
        isBinary=false
        break
   }
}

console.log(isBinary)